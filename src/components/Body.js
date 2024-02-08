import React, { useEffect, useState } from "react";
import RestaurantCard from "./RestaurantCard";
import Shimmer from "./shimmerUi/shimmer";

const Body = () => {

  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [filteredRestaurants, setFilteredRestaurants] = useState([]);

  const [showMore, setShowMore] = useState(false);
  const [searchValue, setSearchValue] = useState('');

  useEffect(() => {
    fetchingData();
  }, [])

  const fetchingData = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.0759837&lng=72.8776559&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    const restaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setListOfRestaurants(restaurants);
    setFilteredRestaurants(restaurants);
  }

  const handleFilterTopRated = () => {
    const filteredList = listOfRestaurants.filter(
      (restaurant) => restaurant.info.avgRating > 4
    );
    setFilteredRestaurants(filteredList);
  };

  const loadMoreRestaurants = async () => {
    const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=22.7195687&lng=75.8577258&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
    const json = await data.json();

    const newRestaurants = json.data.cards[1].card.card.gridElements.infoWithStyle.restaurants;
    setFilteredRestaurants(prevRestaurants => [...prevRestaurants, ...newRestaurants]);
    setShowMore(true);
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
          <RestaurantCard key={restaurant.info.id} {...restaurant.info} />
        ))}
        <br />
        <button onClick={loadMoreRestaurants} className="buttons" disabled={showMore}>Show more</button>
      </div>
    </div>
  );
};

export default Body;
