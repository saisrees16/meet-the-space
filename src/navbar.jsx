import { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import "./navbar.css";

function Navbar() {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="navbar">
            {/* Left: Website Name */}
            <div className="navbar-left">
                <p className="website-name">Akasha Milan</p>
            </div>

            {/* Center: Navigation Links */}
            <nav className={`navbar-center ${isOpen ? "open" : ""}`}>
                <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
                <Link to="/Newshub" onClick={() => setIsOpen(false)}>News Hub</Link>
                <Link to="/Careers" onClick={() => setIsOpen(false)}>Careers</Link>
                <Link to="/construction" onClick={() => setIsOpen(false)}>Space Stations</Link>
                <Link to="/Community" onClick={() => setIsOpen(false)}>Community</Link>
            </nav>

            {/* Right: Kids Section */}
            <div className="navbar-right">
                <Link to="/Kids" className="kids-section" onClick={() => setIsOpen(false)}>Kids</Link>
            </div>
        </div>
    );
}

export default Navbar;
