import React, { useEffect, useState } from "react";
import RestaurantCard, { withDiscountLable } from "./restaurant/RestaurantCard";
import Shimmer from "./shimmerUi/shimmer";
import { Link } from "react-router-dom";
import { RESTAURANTS_API } from "../utils/constant";
import useOnlineStatus from "../utils/useOnlineStatus";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);
  const [searchValue, setSearchValue] = useState('');

  const RestaurantCardWithDiscount = withDiscountLable(RestaurantCard);

  useEffect(() => {
    fetchingData();
  }, [])

  const fetchingData = async () => {
    try {
      const data = await fetch(RESTAURANTS_API);
      const json = await data.json();

      const restaurants1 = json?.data?.cards[1]?.card?.card?.gridElements?.infoWithStyle?.restaurants;
      const restaurants2 = json?.data?.cards[4]?.card?.card?.gridElements?.infoWithStyle?.restaurants;

      const filteredRestaurants1 = restaurants1.filter(newRestaurant => !restaurants2.some(existingRestaurant => existingRestaurant.info.id === newRestaurant.info.id));
      const filteredRestaurants2 = restaurants1.filter(newRestaurant => restaurants2.some(existingRestaurant => existingRestaurant.info.id === newRestaurant.info.id));

      setListOfRestaurants([...filteredRestaurants1, ...filteredRestaurants2]);
      setFilteredRestaurants([...filteredRestaurants1, ...filteredRestaurants2]);

    } catch (error) {
      console.error('Error while fetching restaurants data...', error);
    }
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

  const onlineStatus = useOnlineStatus();

  if (onlineStatus === false) return <div className="offline">You are Offline please check your connection and try again</div>

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
            {restaurant.info.aggregatedDiscountInfoV3 ? (
              <RestaurantCardWithDiscount {...restaurant.info} />
            ) : (
              <RestaurantCard {...restaurant.info} />
            )}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Body;
