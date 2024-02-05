import { IMG_URL } from "../utils/constant";

const RestaurantCard = (restaurant) => {
    const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } = restaurant;

    return (
        <div className="restaurant-card">
            <img src={IMG_URL + cloudinaryImageId} alt="Restaurant-image" className='restaurant-image' />
            <div className="details">
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating} Stars</h4>
            </div>
        </div>
    )
};

export default RestaurantCard;