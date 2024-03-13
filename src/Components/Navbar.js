/**
 * Author: Aidan Thrall
 * Date: 3/5/2024
 * 
 * This will be the navbar component for the Christware webstite. It will contain a route for all of my pages.
 */

import React from "react";
import { Link } from "react-router-dom";

import './Navbar.css';

function Navbar() {
    return(
        <nav className="navbarWrapper">
            <ul>
                <li><Link to="/">Home</Link></li>
                <li><Link to="/About">About</Link></li>
                <li><Link to="/Services">Services</Link></li>
                <li><Link to="/Contact">Contact Us</Link></li>
            </ul>
        </nav>
    )
}

export default Navbar;

