import React from "react";
import "./news.css";

function News() {
    const newsData = [
        {
            id: 1,
            title: "SpaceX Launches New Mission",
            description: "SpaceX successfully launches its latest mission to the International Space Station.",
            image: "https://placehold.co/190x130",
        },
        {
            id: 2,
            title: "NASA's New Discovery",
            description: "NASA reveals groundbreaking discoveries about an exoplanet in the habitable zone.",
            image: "https://placehold.co/190x130",
        },
        {
            id: 3,
            title: "ISRO's Upcoming Moon Mission",
            description: "ISRO plans its next ambitious mission to explore the Moon's south pole.",
            image: "https://placehold.co/190x130",
        }
    ];

    return (
        <div className="news-container">
            <h2 className="news-title">Latest Space News</h2>
            <div className="news-cards">
                {newsData.map((news) => (
                    <div className="card" key={news.id}>
                        <img src={news.image} alt={news.title} className="news-image" />
                        <div className="card-details">
                            <h3 className="text-title">{news.title}</h3>
                        </div>
                        <button className="card-button">Read More</button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default News;
