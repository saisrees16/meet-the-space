import React, { useState, useEffect } from "react";
import "./videos.css";

const API_KEY = "AIzaSyBQft8AD1_iLcN9PhTcBH4ewd0UpAkd8nE";
const MAX_RESULTS = 6;

const recommendedVideos = [
    "yCjJyiqpAuU",
    "_Qj5a2HtdyA",
    "isTEYefMzzM",
    "F2prtmPEjOc"
];

const YouTubeSearch = () => {
    const [searchQuery, setSearchQuery] = useState("");
    const [videos, setVideos] = useState(recommendedVideos);

    useEffect(() => {
        if (searchQuery.trim() === "") {
            setVideos(recommendedVideos);
            return;
        }

        const fetchVideos = async () => {
            try {
                const response = await fetch(
                    `https://www.googleapis.com/youtube/v3/search?part=snippet&q=${encodeURIComponent(
                        searchQuery
                    )}&maxResults=${MAX_RESULTS}&type=video&key=${API_KEY}`
                );
                const data = await response.json();
                setVideos(data.items.map(item => item.id.videoId) || recommendedVideos);
            } catch (error) {
                console.error("Error fetching videos:", error);
            }
        };

        const timeoutId = setTimeout(fetchVideos, 500);
        return () => clearTimeout(timeoutId);
    }, [searchQuery]);

    return (
        <div className="video-section">
            <h2 className="titlez">Explore Space Videos!</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Search YouTube videos..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                />
            </div>
            <div className="video-container">
                {videos.map((videoId) => (
                    <iframe
                        key={videoId}
                        width="560"
                        height="315"
                        src={`https://www.youtube.com/embed/${videoId}`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    ></iframe>
                ))}
            </div>
        </div>
    );
};

export default YouTubeSearch;
