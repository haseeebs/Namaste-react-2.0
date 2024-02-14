import { useParams } from "react-router-dom"
import Shimmer from "../shimmerUi/shimmer";
import useMenuData from "../../utils/useMenuData";
import useOnlineStatus from "../../utils/useOnlineStatus";
import RestaurantMenuDetails from "./MenuDetails";

const RestaurantMenu = () => {

    const { restaurantId } = useParams();

    const restaurantData = useMenuData(restaurantId);

    const onlineStatus = useOnlineStatus();

    if (onlineStatus === false) return <div className="offline">You are Offline please check your connection and try again</div>

    if (restaurantData === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines, avgRating, totalRatingsString } = restaurantData?.data?.cards[0]?.card?.card?.info;

    const categories =
        restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (category) => category?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        );

    // const additionalCategories =
    //     restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
    //         (category) => category?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
    //     );

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
                {categories.map((category) => (
                    <RestaurantMenuDetails category={category} />
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu