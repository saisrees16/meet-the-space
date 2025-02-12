import { useState, useEffect } from "react";
import "./navbar.css";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useNavigate } from "react-router-dom";
import { getAuth, signOut, onAuthStateChanged, sendPasswordResetEmail } from "firebase/auth";

function Navbar2() {
    const [menuOpen, setMenuOpen] = useState(false);
    const [user, setUser] = useState(null);
    const [dropdownOpen, setDropdownOpen] = useState(false);
    const [showForgotPassword, setShowForgotPassword] = useState(false);
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const navigate = useNavigate();
    const auth = getAuth();

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser);
        });
        return () => unsubscribe();
    }, [auth]);

    const handleLogout = async () => {
        try {
            await signOut(auth);
            setUser(null);
            navigate("/Login");
        } catch (error) {
            console.error("Logout Error:", error);
        }
    };

    const handleForgotPassword = async () => {
        if (!email) {
            setMessage("Please enter your email.");
            return;
        }

        try {
            await sendPasswordResetEmail(auth, email);
            setMessage("Reset link sent to your email.");
        } catch (error) {
            setMessage("Error sending reset email. Try again.");
        }
    };

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
                <Link to="/Newshub">Discussions</Link>

                {user ? (
                    <div className="user-menu">
                        <button onClick={() => setDropdownOpen(!dropdownOpen)}>
                            {user.displayName}
                        </button>
                        {dropdownOpen && (
                            <div className="dropdown">
                                <button onClick={() => setShowForgotPassword(true)}>
                                    Forgot Password
                                </button>
                                <button onClick={handleLogout}>Logout</button>
                            </div>
                        )}
                    </div>
                ) : (
                    <Link to="/Login">Login</Link>
                )}
            </nav>

            {/* Forgot Password Popup */}
            {showForgotPassword && (
                <div className="popup">
                    <div className="popup-content">
                        <FiX className="close-icon" onClick={() => setShowForgotPassword(false)} />
                        <h3>Reset Password</h3>
                        <input
                            type="email"
                            placeholder="Enter your email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                        />
                        <button onClick={handleForgotPassword}>Send Reset Link</button>
                        {message && <p className="message">{message}</p>}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Navbar2;
