import React from "react";
import "./footer.css";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaRocket } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer">
            <div className="footer-container">
                {/* Left - Logo and About */}
                <div className="footer-about">
                    <FaRocket className="footer-logo" />
                    <h2>Meet the Space</h2>
                    <p>Explore the universe with us! Get the latest updates on space missions, research, and discoveries.</p>
                </div>

                {/* Middle - Quick Links */}
                <div className="footer-links">
                    <h3>Quick Links</h3>
                    <ul>
                        <li><a href="#">Home</a></li>
                        <li><a href="#">News Hub</a></li>
                        <li><a href="#">Colleges</a></li>
                        <li><a href="#">Space Stations</a></li>
                        <li><a href="#">Kids Section</a></li>
                    </ul>
                </div>

                {/* Right - Social & Newsletter */}
                <div className="footer-newsletter">
                    <h3>Stay Updated</h3>
                    <p>Subscribe to get the latest space news delivered to your inbox.</p>
                    <form>
                        <input type="email" placeholder="Enter your email" required />
                        <button type="submit">Subscribe</button>
                    </form>
                    <div className="social-icons">
                        <a href="#"><FaFacebook /></a>
                        <a href="#"><FaTwitter /></a>
                        <a href="#"><FaInstagram /></a>
                        <a href="#"><FaLinkedin /></a>
                    </div>
                </div>
            </div>

            {/* Copyright */}
            <div className="footer-bottom">
                <p>&copy; 2025 Meet the Space. All Rights Reserved.</p>
            </div>
        </footer>
    );
}

export default Footer;
