import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);

  useEffect(() => {
    fetchingData();
  }, [])

  const fetchingData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();
    // console.log(json.data.cards[4].card.card.gridElements.infoWithStyle.restaurants); // here we have more restaurants how can we add them also
    const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurants(restaurants);
  }

  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setListOfRestaurants(filteredList);
  };

  return (
    <div className="body">
      <div className="search"></div>

      <div className="filter">
        <button className="filter-btn buttons" onClick={handleFilterTopRated}>
          Top Rated Restaurants
        </button>
      </div>

      <div className="restaurant-container">
        {listOfRestaurants.map((restaurant) => (
          <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
        ))}
      </div>
    </div>
  );
};

export default Body;
