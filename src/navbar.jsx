import { useState } from "react";
import "./navbar.css";
import { FiMenu, FiX } from "react-icons/fi";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    return (
        <div className="navbar">
            <div className="logo">
                <figure>
                    <img src="https://placehold.co/70x40" alt="logo" />
                    <figcaption>Meet the Space</figcaption>
                </figure>
            </div>
            <button className="menu-toggle" onClick={() => setMenuOpen(!menuOpen)}>
                {menuOpen ? <FiX size={24} /> : <FiMenu size={24} />}
            </button>
            <nav className={menuOpen ? "nav-links open" : "nav-links"}>
                <a href="#">Home</a>
                <a href="#">News Hub</a>
                <a href="#">Colleges</a>
                <select>
                    <option>Select station</option>
                    <option>SpaceX</option>
                    <option>NASA</option>
                    <option>ISRO</option>
                </select>
                <a href="#">Kids</a>
            </nav>
        </div>
    );
}

export default Navbar;
