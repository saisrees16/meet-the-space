import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Ar.css";

function Ar() {
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    const handleClick = () => {
        navigate("/Arpage"); // Redirects to the 'Arpage' JSX page
    };

    return (
        <div className="ar">
            <h1>Augmented Reality</h1>
            <figure className="animated-container">
                {loading && <div className="loader">Loading...</div>}
                <iframe
                    src="/Arpage"
                    title="space-view"
                    onLoad={() => setLoading(false)}
                    className={`iframe-view ${loading ? "hidden" : "fade-in"}`}
                />
                <figcaption>Visit the space at your locality</figcaption>
            </figure>
            <button className="learn-more" onClick={handleClick}>
                <span className="circle">
                    <span className="icon arrow"></span>
                </span>
                <span className="button-text">Explore</span>
            </button>
        </div>
    );
}

export default Ar;
