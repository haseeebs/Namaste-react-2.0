import React from 'react';
import ReactDOM from 'react-dom/client';
import { restaurants } from './data';

const Header = () => {
    return (
        <div className='header'>
            <div className="logo-container">
                <h1 className='logo'>LOGO</h1>
            </div>

            <div className="nav-items">
                <ul>
                    <li>Home</li>
                    <li>About</li>
                    <li>Contact us</li>
                    <li>Cart</li>
                </ul>
            </div>
        </div>
    )
}

const RestaurantCard = (restaurant) => {
    const { name, cloudinaryImageId, cuisines, costForTwo, avgRating } = restaurant;

    return (
        <div className="restaurant-card">
            <img src={`https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/${cloudinaryImageId}`} alt="Restaurant-image" className='restaurant-image' />
            <div className="details">
                <h3>{name}</h3>
                <h4>{cuisines.join(', ')}</h4>
                <h4>{costForTwo}</h4>
                <h4>{avgRating} Stars</h4>
            </div>
        </div>
    )
}

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
}

const App = () => {
    return (
        <>
            <Header />
            <Body />
        </>
    )
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);