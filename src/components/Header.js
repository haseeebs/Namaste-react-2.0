import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";
import { useSelector } from "react-redux";

const Header = () => {

    const cartItems = useSelector( store => store.cart.items);

    return (
        <div className='header'>
            <div className="logo-container">
                <h1 className='logo'>LOGO</h1>
            </div>

            <div className="nav-items">
                <ul>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/cart'}><li>Cart ({cartItems.length})</li></Link>
                    <Link to={'/instamart'}><strong><li>Instamart</li></strong></Link>

                </ul>
            </div>
        </div>
    )
};

export default Header;