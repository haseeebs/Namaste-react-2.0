import { Link } from "react-router-dom";

const Header = () => {
    return (
        <div className='header'>
            <div className="logo-container">
                <h1 className='logo'>LOGO</h1>
            </div>

            <div className="nav-items">
                <ul>
                    <Link to={'/'}><li>Home</li></Link>
                    <Link to={'/about'}><li>About</li></Link>
                    <Link to={'/contact'}><li>Contact us</li></Link>
                    <Link to={'/instamart'}><strong><li>Instamart</li></strong></Link>
                </ul>
            </div>
        </div>
    )
};

export default Header;