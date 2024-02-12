import { useParams } from "react-router-dom"
import { MENU_ITEM_IMG } from "../utils/constant";
import Shimmer from "./shimmerUi/shimmer";
import useMenuData from "../utils/useMenuData";
import useOnlineStatus from "../utils/useOnlineStatus";

const RestaurantMenu = () => {

    const { restaurantId } = useParams();

    const restaurantData = useMenuData(restaurantId);

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <div className="offline">You are Offline please check your connection and try again</div>

    if (restaurantData === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines, avgRating, totalRatingsString } = restaurantData?.data?.cards[0]?.card?.card?.info;

    const menuInfo1 = restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;
    const menuInfo2 = restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card?.itemCards;

    // console.log(menuInfo1 ? ('1st is here') : ('1st is not here'));
    // console.log(menuInfo2 ? ('2nd is here') : ('2nd is not here'));
    // console.log(menuInfo1);
    // console.log(menuInfo2);

    let menuInfo = menuInfo1 || menuInfo2;

    if (menuInfo1 && menuInfo2) {
        // Filter out items with the same restaurant ID
        const uniqueMenuInfo2 = menuInfo2.filter(sameRestaurants =>
            menuInfo1.every(restaurant => restaurant.card.info.id !== sameRestaurants.card.info.id)
        );

        menuInfo = [...menuInfo, ...uniqueMenuInfo2];
    }

    return (
        <div className="restaurant">

            <div className="restaurant-details">

                <div className="first">
                    <h2>{name}</h2>
                    <p>{cuisines.join(', ')}</p><br />
                    <p>{costForTwoMessage}</p>
                </div>

                <div className="second">
                    <div className="star">
                        <p>&#9733; {avgRating}</p>
                    </div>
                    <div className="rating">
                        <p>{totalRatingsString}</p>
                    </div>
                </div>

            </div>

            <div className="restaurant-menu">
                {menuInfo.map(item => (
                    <div className="item" key={item.card.info.id}>

                        <div className="info">
                            <p><strong>{item.card.info.name}</strong></p>
                            <p>{'₹' + item.card.info.price / 100}</p>
                            <p>{item.card.info.description}</p>
                        </div>

                        <div className="image">

                            {item.card.info.imageId ? (
                                <img src={`${MENU_ITEM_IMG}${item.card.info.imageId}`} alt="item image" />
                            ) : (
                                <div className="dummy-image"></div>
                            )}

                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu