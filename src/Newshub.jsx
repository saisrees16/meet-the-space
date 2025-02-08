import React, { useEffect, useState } from "react";
import "./nh.css";

const Newshub = () => {
  const [articles, setArticles] = useState([]);
  const API_URL = "https://api.spaceflightnewsapi.net/v4/articles/";

  useEffect(() => {
    fetch(API_URL)
      .then((response) => response.json())
      .then((data) => setArticles(data.results))
      .catch((error) => console.error("Error fetching news:", error));
  }, []);

  return (
    <div className="container">
      <h1>🚀 Space News</h1>
      <div className="news-grid">
        {articles.map((article) => (
          <div className="news-card" key={article.id}>
            <img src={article.image_url} alt={article.title} />
            <h2>{article.title}</h2>
            <p>{article.summary.substring(0, 100)}...</p>
            <a href={article.url} target="_blank" rel="noopener noreferrer">
              Read More
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Newshub;
