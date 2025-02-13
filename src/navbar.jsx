import { useState } from "react";
import "./navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
    return (
        <div className="navbar">
            {/* Left: Website Name */}
            <div className="navbar-left">
                <p className="website-name">Akasha Milan</p>
            </div>

            {/* Center: Navigation Links */}
            <nav className="navbar-center">
                <Link to="/">Home</Link>
                <Link to="/Newshub">News Hub</Link>
                <Link to="/Careers">Careers</Link>
                <Link to="/construction">Space Stations</Link>
                <Link to="/Community">Community</Link>
            </nav>

            {/* Right: Kids Section */}
            <div className="navbar-right">
                <Link to="/Kids" className="kids-section">Kids</Link>
            </div>
        </div>
    );
}

export default Navbar;
