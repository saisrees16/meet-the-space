import { useState } from "react";
import "./navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

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
                <a href="/">Home</a>
                <a href="/Newshub">News Hub</a>
                <a href="/">Careers</a>
                <a href="/">Space Stations</a>
                <a href="/Kids">Kids</a>
            </nav>
        </div>
    );
}

export default Navbar;
