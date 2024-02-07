import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmerUi/shimmer";

const Body = () => {
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [showMore, setShowMore] = useState(false);

  useEffect(() => {
    fetchingData();
  }, [])

  const fetchingData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurants(restaurants);
  }

  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setListOfRestaurants(filteredList);
  };

  const loadMoreRestaurants = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurants(restaurant => [...restaurant, ...restaurants]);
    setShowMore(true);
  };
  
  if(listOfRestaurants.length === 0){
    return <Shimmer />
  }

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
        <br />
        <button onClick={loadMoreRestaurants} className="buttons" disabled={showMore}>Show more</button>
      </div>
    </div>
  );
};

export default Body;
