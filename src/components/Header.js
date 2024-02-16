import { useContext } from "react";
import { Link } from "react-router-dom";
import userContext from "../utils/userContext";

const Header = () => {
    const user = useContext(userContext);
    console.log(user);
    return (
        <div className='header'>
            <div className="logo-container">
                <h1 className='logo'>LOGO</h1>
            </div>

            <div className="nav-items">
                <ul>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/instamart'}><strong><li>Instamart</li></strong></Link>
                </ul>
            </div>
        </div>
    )
};

export default Header;