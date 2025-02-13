import React, { useEffect, useState } from "react";
import "./nh.css";

const Newshub = () => {
    const [articles, setArticles] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const API_URL = "https://api.spaceflightnewsapi.net/v4/articles/";

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => {
                setArticles(data.results);
                setLoading(false);
            })
            .catch((error) => {
                console.error("Error fetching news:", error);
                setError("Failed to load news. Please try again later.");
                setLoading(false);
            });
    }, []);

    return (
        <div className="container">
            <h1>Space News</h1>

            {loading && <p className="loading">Loading news...</p>}
            {error && <p className="error">{error}</p>}

            <div className="news-grid">
                {!loading && !error && articles.length > 0 ? (
                    articles.map((article) => (
                        <a
                            href={article.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="news-card"
                            key={article.id}
                        >
                            {/* Red, Yellow, Green Control Buttons */}
                            <div className="tools">
                                <div className="circle"><span className="red box"></span></div>
                                <div className="circle"><span className="yellow box"></span></div>
                                <div className="circle"><span className="green box"></span></div>
                            </div>

                            <img
                                src={article.image_url || "https://via.placeholder.com/300"}
                                alt={article.title}
                            />
                            <div className="news-content">
                                <h2>{article.title}</h2>
                                <p>{article.summary.substring(0, 100)}...</p>
                            </div>
                        </a>
                    ))
                ) : (
                    !loading && !error && <p>No news available.</p>
                )}
            </div>
        </div>
    );
};

export default Newshub;