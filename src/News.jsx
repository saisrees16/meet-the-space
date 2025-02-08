import React, { useEffect, useState } from "react";
import "./news.css";

function News() {
    const [newsData, setNewsData] = useState([]);
    const API_URL = "https://api.spaceflightnewsapi.net/v4/articles/?limit=3";

    useEffect(() => {
        fetch(API_URL)
            .then((response) => response.json())
            .then((data) => setNewsData(data.results))
            .catch((error) => console.error("Error fetching news:", error));
    }, []);

    return (
        <div className="news-container">
            <h2 className="news-title">Latest Space News</h2>
            <div className="news-cards">
                {newsData.map((news) => (
                    <div className="card" key={news.id}>
                        <img src={news.image_url} alt={news.title} className="news-image" />
                        <div className="card-details">
                            <h3 className="text-title">{news.title}</h3>
                        </div>
                        <a href={news.url} target="_blank" rel="noopener noreferrer">
                            <button className="card-button">Read More</button>
                        </a>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
