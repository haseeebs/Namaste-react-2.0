import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {

    const cartItems = useSelector( store => store.cart.items);

    return (
        <div className='header'>
            <div className="logo-container">
                <Link to={'/'} className='logo'>Swiggy</Link>
            </div>

            <div className="nav-items">
                <ul>
                    <Link to={'/cart'}><li>Cart ({cartItems.length})</li></Link>
                    <Link to={'/instamart'}><strong><li style={{color: '#FFBD2E', fontWeight:'bold', textTransform: 'uppercase'}}>Instamart</li></strong></Link>
                </ul>
            </div>
        </div>
    )
};

export default Header;