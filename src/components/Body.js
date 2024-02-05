import { restaurants } from "../../data";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
    return (
        <div className="body">

            <div className="search"></div>

            <div className="restaurant-container">
                {
                    restaurants.map((restaurant) => (
                        <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
                    ))
                }
            </div>

        </div>
    )
};

export default Body;