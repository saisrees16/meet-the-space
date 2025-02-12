import { useState } from "react";
import "./navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="logo">
                <p>Akasha Milan</p>
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            <nav className={menuOpen ? "nav-links open" : "nav-links"}>
                <Link to="/">Home</Link>
                <Link to="/Newshub">News Hub</Link>
                <Link to="/Careers">Careers</Link>
                <Link to="/construction">Space Stations</Link>
                <Link to="/Community">Community</Link>
                <Link to="/Kids">Kids</Link>
            </nav>
        </div>
    );
}

export default Navbar;
