import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import { MENU_API, MENU_ITEM_IMG } from "../utils/constant";
import Shimmer from "./shimmerUi/shimmer";


const RestaurantMenu = () => {

    const { restaurantId } = useParams();

    const [restaurantData, setRestaurantData] = useState(null);

    useEffect(() => {
        fetchRestaurantData();
    }, [])

    const fetchRestaurantData = async () => {
        try {
            const data = await fetch(`${MENU_API}${restaurantId}`)
            const json = await data.json();

            setRestaurantData(json);
        } catch (error) {
            console.error('Error while fetching restaurant menu data...' , error);
        }
    }

    if (restaurantData === null) return <Shimmer />

    const { id, name, costForTwoMessage, cuisines, avgRating, totalRatingsString } = restaurantData?.data?.cards[0]?.card?.card?.info;
    const menuInfo = restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[2]?.card?.card?.itemCards;

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