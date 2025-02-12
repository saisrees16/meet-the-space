import React from "react";
import "./paths.css";
import { FaUserAstronaut, FaSatellite, FaRocket, FaMicroscope, FaRobot, FaGavel } from "react-icons/fa";

const careers = [
    { title: "Astronaut", icon: <FaUserAstronaut />, description: "Trains for space travel and conducts experiments in orbit." },
    { title: "Aerospace Engineer", icon: <FaRocket />, description: "Designs spacecraft, satellites, and propulsion systems." },
    { title: "Astrophysicist", icon: <FaMicroscope />, description: "Studies space phenomena like black holes and galaxies." },
    { title: "Satellite Engineer", icon: <FaSatellite />, description: "Builds and maintains communication and observation satellites." },
    { title: "Space Robotics Engineer", icon: <FaRobot />, description: "Develops robotic systems for space missions." },
    { title: "Space Lawyer", icon: <FaGavel />, description: "Handles legal issues related to space exploration and treaties." }
];

const Paths = () => {
    return (
        <div className="career-paths-container">
            <div className="career-grid">
                {careers.map((career, index) => (
                    <div key={index} className="career-card">
                        <div className="career-icon">{career.icon}</div>
                        <h3 className="career-title">{career.title}</h3>
                        <p className="career-description">{career.description}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Paths;
