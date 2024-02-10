import { useEffect, useState } from "react";
import { useParams } from "react-router-dom"
import Shimmer from "./shimmerUi/shimmer";


const RestaurantMenu = () => {

    const { restaurantId } = useParams();

    const [restaurantData, setRestaurantData] = useState(null);

    useEffect(() => {
        fetchRestaurantData();
    }, [])

    const fetchRestaurantData = async () => {
        const data = await fetch(`https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=19.0759837&lng=72.8776559&restaurantId=${restaurantId}`)
        const json = await data.json();

        setRestaurantData(json);
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
                    <div className="item" key={id}>

                        <div className="info">
                            <p><strong>{item.card.info.name}</strong></p>
                            <p>{'₹' + item.card.info.price / 100}</p>
                            <p>{item.card.info.description}</p>
                        </div>

                        <div className="image">
                            {item.card.info.imageId ? (
                                <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_208,h_208,c_fit/${item.card.info.imageId}`} alt="item image" />
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