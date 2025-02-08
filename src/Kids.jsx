import React, { useEffect, useState } from 'react';
import { Camera, ChevronRight, Star } from 'lucide-react';
import './kids.css';

const KidsSpaceExplorer = () => {
    const [selectedPlanet, setSelectedPlanet] = useState(null);
    const [showFunFact, setShowFunFact] = useState(false);

    useEffect(() => {
        document.title = "Explore Space | Fun Learning for Kids";
    }, []);

    const planets = [
        { name: "Mercury", fact: "Mercury is the smallest planet and closest to the Sun!" },
        { name: "Venus", fact: "Venus is the hottest planet in our solar system!" },
        { name: "Earth", fact: "Earth is the only planet we know that has life!" },
        { name: "Mars", fact: "Mars is called the Red Planet because of its rusty color!" }
    ];

    return (
        <div className="space-explorer">
            {/* Hero Section */}
            <section className="hero">
                {[...Array(20)].map((_, i) => (
                    <Star
                        key={i}
                        className="animate-glow"
                        style={{
                            position: 'absolute',
                            left: `${Math.random() * 100}%`,
                            top: `${Math.random() * 100}%`,
                            color: '#ffd700'
                        }}
                        size={Math.random() * 10 + 5}
                    />
                ))}

                <h1 className="hero-title">
                    Welcome to Space Explorer! 🚀
                </h1>
                <p className="hero-text">
                    Get ready for an amazing journey through space! Learn about planets,
                    stars, and all the cool things in our universe!
                </p>
            </section>

            {/* Planets Section */}
            <section className="planets">
                <h2 className="section-title">
                    Explore the Planets
                </h2>

                <div className="planet-container">
                    {planets.map((planet) => (
                        <div
                            key={planet.name}
                            className="planet"
                            onClick={() => {
                                setSelectedPlanet(planet);
                                setShowFunFact(true);
                            }}
                        >
                            <img
                                src={`/${planet.name.toLowerCase()}.png`}
                                alt={planet.name}
                                className="planet-img"
                            />
                            <p className="planet-name">{planet.name}</p>
                        </div>
                    ))}
                </div>

                {showFunFact && selectedPlanet && (
                    <div className="learning-text animate-fadeIn">
                        <Camera className="h-4 w-4 mr-2" />
                        <span>{selectedPlanet.fact}</span>
                    </div>
                )}
            </section>

            {/* Fun Learning Section */}
            <section className="fun-learning">
                <h2 className="section-title">
                    Super Space Facts! ⭐
                </h2>

                <div className="learning-text">
                    <p>The Sun is so big that about 1.3 million Earths could fit inside it!</p>
                    <p>A day on Venus is longer than its year!</p>
                    <p>The footprints on the Moon will stay there for millions of years!</p>
                </div>
            </section>

            {/* Footer */}
            <footer className="footer">
                <p>&copy; 2025 Space Explorer. Making learning fun for kids! 🌟</p>
            </footer>
        </div>
    );
};

export default KidsSpaceExplorer;