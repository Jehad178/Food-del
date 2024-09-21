import React, { useContext, useState } from "react";
import './Navbar.css';
import { assets } from "../../Assets/assets";
import { Link } from "react-router-dom";
import { StoreContext } from "../../context/StoreContext";

function Navbar({ setShowLogin }) {
    const [menu, setmenu] = useState("home");
    const { getTotalCartAmount } = useContext(StoreContext)

    return (
        <div className="navbar">
            <Link to='/'><img src={assets.logo} className="logo" alt="Logo" /></Link>
            <ul className="navbar-menu">
                <Link to='/' onClick={() => setmenu("home")} className={menu === "home" ? "active" : ""}>Home</Link>
                <a href='#explore-menu' onClick={() => setmenu("menu")} className={menu === "menu" ? "active" : ""}>Menu</a>
                <a href='#app-download' onClick={() => setmenu("mobile-app")} className={menu === "mobile-app" ? "active" : ""}>Mobile-App</a>
                <a href='#footer' onClick={() => setmenu("contact-us")} className={menu === "contact-us" ? "active" : ""}>Contact Us</a>
            </ul>
            <div className="navbar-right">
                <img src={assets.search_icon} alt="Search" />
                <div className="navbar-search-icon">
                    <Link to='/cart'><img src={assets.basket_icon} alt="Basket" /></Link>
                    <div className={getTotalCartAmount() === 0 ? "" : "dot"}></div>
                </div>
                <button onClick={() => setShowLogin(true)}>Sign In</button>
            </div>
        </div>
    );
}

export default Navbar;
