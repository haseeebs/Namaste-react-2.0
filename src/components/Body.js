import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmerUi/shimmer";
import { Link } from "react-router-dom";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchingData();
  }, [])

  const fetchingData = async () => {
    const data = await fetch("https://thingproxy.freeboard.io/fetch/https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    const restaurants1 = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    const restaurants2 = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
    
    const filteredRestaurants1 = restaurants1.filter(newRestaurant => !restaurants2.some(existingRestaurant => existingRestaurant.info.id === newRestaurant.info.id));
    const filteredRestaurants2 = restaurants1.filter(newRestaurant => restaurants2.some(existingRestaurant => existingRestaurant.info.id === newRestaurant.info.id));

    setListOfRestaurants([...filteredRestaurants1, ...filteredRestaurants2]);
    setFilteredRestaurants([...filteredRestaurants1, ...filteredRestaurants2]);
  }

  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredRestaurants(filteredList);
  };

  const handleSearch = () => {
    const filteredList = listOfRestaurants.filter(
      restaurant => restaurant.info.name.toLowerCase().includes(searchValue.toLowerCase())
    )

    setFilteredRestaurants(filteredList);
  }

  if (listOfRestaurants.length === 0) {
    return <Shimmer />
  }

  return (
    <div className="body">

      <div className="filter">

        <button className="filter-btn buttons" onClick={handleFilterTopRated}>
          Top Rated Restaurants
        </button>

        <div className="search">
          <input
            type="text"
            placeholder="Search restaurants"
            className="search-box"
            value={searchValue}
            onChange={event => setSearchValue(event.target.value)}
          />
          <button className="search-button" onClick={handleSearch}>Search</button>
        </div>

      </div>

      <div className="restaurant-container">
        {filteredRestaurants.map((restaurant) => (
          <Link to={`/restaurant/${restaurant.info.id}`} key={restaurant.info.id}>
            <RestaurantCard {...restaurant.info} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
