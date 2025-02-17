import './third.css';
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
const Third = () => {
    const navigate = useNavigate();
    const handleclick = () => {
        navigate("/Kids");
    };
    return (
        <div className="kids-containerx">
            <div className="content-boxx">
                <div className="floating-cloud cloud1">☁️</div>
                <div className="floating-cloud cloud2">☁️</div>
                <div className="floating-cloud cloud3">☁️</div>

                <h1 className="titlex">Welcome Kids! 🌟</h1>

                <p className="descriptionx">
                    Hey there, young explorers! 🚀 Get ready for an amazing adventure
                    filled with fun games, cool stories, and awesome activities.
                    Let's learn and play together! 🎮 🎨
                </p>

                <div className="button-containerx">
                    <button className="kid-button button-play">Start Playing! 🎯</button>
                    <button className="kid-button button-explore" onClick={handleclick}>Explore More! 🗺️</button>
                </div>

                <div className="emoji-row">
                    <span className="emoji">🌈</span>
                    <span className="emoji">🎪</span>
                    <span className="emoji">🎨</span>
                    <span className="emoji">🎮</span>
                    <span className="emoji">🦄</span>
                </div>
            </div>
        </div>
    )
}
export default Third;