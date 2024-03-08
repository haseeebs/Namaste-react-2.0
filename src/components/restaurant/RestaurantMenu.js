import { useState } from "react";
import { useParams } from "react-router-dom"
import Shimmer from "../Shimmer";
import useMenuData from "../../utils/useMenuData";
import useOnlineStatus from "../../utils/useOnlineStatus";
import RestaurantMenuDetails from "./RestaurantMenuDetails";

const RestaurantMenu = () => {

    const { restaurantId } = useParams();

    const restaurantData = useMenuData(restaurantId);

    const onlineStatus = useOnlineStatus();

    const [showIndex, setShowIndex] = useState(null);

    if (onlineStatus === false) return <div className="offline">You are Offline please check your connection and try again</div>

    if (restaurantData === null) return <Shimmer />

    const { name, costForTwoMessage, cuisines, avgRating, totalRatingsString } = restaurantData?.data?.cards[0]?.card?.card?.info;

    const categories =
        restaurantData?.data?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (category) => category?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
        ) || [];

    const additionalCategories =
        restaurantData?.data?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
            (category) => category?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory" || "type.googleapis.com/swiggy.presentation.food.v2.NestedItemCategory"
        ) || [];

    const allCategories = [...categories, ...additionalCategories].filter(category => category?.card?.card?.['@type'] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");

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
                {/* Controlled component */}
                {allCategories.map((allCategorie, index) => (
                    <RestaurantMenuDetails
                        key={allCategorie.card.card.title}
                        category={allCategorie}
                        showItem={index === showIndex ? true : false}
                        setShowIndex={() => setShowIndex((previousIndex) => previousIndex === index ? null : index)}
                    />
                ))}
            </div>
        </div>
    )
}

export default RestaurantMenu