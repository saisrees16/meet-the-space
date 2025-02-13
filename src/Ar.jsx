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
            {/* Background iframe */}
            <div className="iframe-container">
                {loading && <div className="loader">Loading...</div>}
                <iframe
                    src="https://srinivasc16.github.io/meetthespace/"
                    title="space-view"
                    onLoad={() => setLoading(false)}
                    className="iframe-view"
                />
            </div>

            {/* Content Overlay */}
            <div className="content">
                <h1>Augmented Reality</h1>
                <div className="button-container">
                    <button className="learn-more" onClick={handleClick}>
                        <span className="circle">
                            <span className="icon arrow"></span>
                        </span>
                        <span className="button-text">Feel it</span>
                    </button>
                </div>
            </div>
        </div>
    );
}

export default Ar;
