import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Road.css";

const roadmapData = [
    {
        title: "1️⃣ School Level (Grades 9-12)",
        subtitle: "Build a Strong Foundation",
        icon: "📚",
        details: [
            "Focus on STEM subjects: Mathematics, Physics, Chemistry, Computer Science.",
            "Participate in science fairs, robotics competitions, and coding contests.",
            "Join astronomy or aerospace clubs, attend NASA/ISRO workshops.",
            "Start learning programming (Python, C++, MATLAB).",
            "Take online courses on physics, astronomy, and engineering."
        ],
    },
    {
        title: "2️⃣ Undergraduate Studies",
        subtitle: "Bachelor’s Degree in Space Sciences",
        icon: "🎓",
        details: [
            "Choose a degree: Aerospace Engineering, Mechanical Engineering, Physics, Computer Science.",
            "Take courses on fluid dynamics, propulsion, avionics, space systems.",
            "Join student satellite programs, rocket clubs, and space hackathons.",
            "Apply for internships at NASA, ISRO, ESA, SpaceX, Blue Origin.",
            "Develop skills in coding, AI, and simulations for space research."
        ],
    },
    {
        title: "3️⃣ Specialization",
        subtitle: "Master’s Degree or PhD – Choose Your Path",
        icon: "🔬",
        details: [
            "Engineering & Space Tech – Focus on spacecraft design, propulsion, satellite communication.",
            "Astronomy & Astrophysics – Work on space observation, dark matter, cosmology.",
            "Planetary Science & Robotics – Develop Mars rovers, robotic explorers.",
            "Space Medicine & Bioastronautics – Study human survival in space.",
            "AI & Data Science in Space – Work on satellite data analysis, AI-powered navigation."
        ],
    },
    {
        title: "4️⃣ Industry Experience",
        subtitle: "Get Hands-on Space Projects",
        icon: "🛰",
        details: [
            "Apply for research fellowships at NASA, ISRO, ESA, or private companies.",
            "Gain experience in CubeSat projects, space propulsion research, and satellite technologies.",
            "Publish research papers in space tech, astrophysics, or planetary sciences."
        ],
    },
    {
        title: "5️⃣ Career Opportunities",
        subtitle: "Where to Apply?",
        icon: "🚀",
        details: [
            "Government Space Agencies – NASA, ISRO, ESA, Roscosmos, JAXA, CNSA.",
            "Private Space Companies – SpaceX, Blue Origin, Rocket Lab, Virgin Galactic.",
            "Aerospace Companies – Boeing, Lockheed Martin, Northrop Grumman.",
            "Research Institutions & Universities – MIT, Caltech, IIST, Cambridge."
        ],
    }
];

const Road = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const toggleSection = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="roadmap-container">
            <h1 className="roadmap-title">Career Roadmap for Space Exploration</h1>
            <div className="roadmap-grid">
                {roadmapData.map((step, index) => (
                    <motion.div
                        key={index}
                        className={`roadmap-card ${openIndex === index ? "expanded" : ""}`}
                        onClick={() => toggleSection(index)}
                        whileHover={{ scale: 1.05 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="roadmap-header">
                            <span className="roadmap-icon">{step.icon}</span>
                            <div className="roadmap-text">
                                <h3 className="roadmap-title">{step.title}</h3>
                                <p className="roadmap-subtitle">{step.subtitle}</p>
                            </div>
                        </div>
                        {openIndex === index && (
                            <motion.ul
                                className="roadmap-details"
                                initial={{ opacity: 0, y: -10 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ duration: 0.4 }}
                            >
                                {step.details.map((detail, i) => (
                                    <li key={i} className="roadmap-item">{detail}</li>
                                ))}
                            </motion.ul>
                        )}
                    </motion.div>
                ))}
            </div>
        </div>
    );
};

export default Road;
