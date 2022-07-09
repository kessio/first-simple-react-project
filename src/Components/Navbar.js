import React from "react";
import './Navbar.css';
import pic from "../images/React-icon.png";


const Navbar = () => {
    return(
       <nav className="navbar">
        <img src={pic} alt="logo" className="logo-img" />
        <h3>React Facts</h3>
        <h4>React - Project 1</h4>
       </nav>
    );
}
export default Navbar;