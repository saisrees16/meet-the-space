import React, { useEffect, useState, useRef } from 'react';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import './kids.css';

const KidsSpaceExplorer = () => {
    const navigate = useNavigate();
    const scrollRef = useRef(null);

    useEffect(() => {
        document.title = "Explore Space | Fun Learning for Kids";
    }, []);

    const handleGameRedirect = (gamePath) => {
        navigate(gamePath);
    };

    const scroll = (direction) => {
        if (scrollRef.current) {
            const scrollAmount = 600; // Adjust as needed
            scrollRef.current.scrollBy({
                left: direction === "left" ? -scrollAmount : scrollAmount,
                behavior: "smooth",
            });
        }
    };

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

                <h1 className="hero-title">Welcome to Space Explorer! 🚀</h1>
                <p className="hero-text">
                    Get ready for an amazing journey through space! Learn about planets,
                    stars, and all the cool things in our universe!
                </p>
            </section>

            {/* Games Section */}
            <section className="games">
                <div className="something">
                    <h2>Check out!</h2>
                </div>
                <div className="gamesx">
                    {/* Jigsaw Puzzle */}
                    <div className="containery">
                        <div className="box" onClick={() => handleGameRedirect('/Jigsaw')}>
                            <span className="title">Jigsaw Puzzle</span>
                            <div>
                                <strong>Test your puzzle skills!</strong>
                                <p>Piece together space images!</p>
                                <button>P L A Y</button>
                            </div>
                        </div>
                    </div>

                    {/* Space Adventure */}
                    <div className="containery">
                        <div className="box" onClick={() => handleGameRedirect('/SpaceAdventure')}>
                            <span className="title">Space Adventure</span>
                            <div>
                                <strong>Explore the Galaxy!</strong>
                                <p>Discover planets & solve missions!</p>
                                <button>P L A Y</button>
                            </div>
                        </div>
                    </div>

                    {/* Quiz Time */}
                    <div className="containery">
                        <div className="box" onClick={() => handleGameRedirect('/Quiz')}>
                            <span className="title">Quiz Time</span>
                            <div>
                                <strong>Test your knowledge!</strong>
                                <p>Answer fun space questions!</p>
                                <button>P L A Y</button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Space Learning Videos */}
            <section>
                <div className="containerl">
                    <h2>Learn about Space</h2>
                    <div className="video-wrapper">
                        <button className="scroll-btn left" onClick={() => scroll("left")}>
                            <ChevronLeft size={32} />
                        </button>

                        <div className="video-scroll" ref={scrollRef}>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/yCjJyiqpAuU?si=hVNs-xeISx3CVNj2"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/_Qj5a2HtdyA?si=QOqJvf7AePHPpgYs"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe width="560" height="315"
                                    src="https://www.youtube.com/embed/isTEYefMzzM?si=9B4R9_ir4chmlH_A"
                                    title="YouTube video player" frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin" allowFullScreen></iframe>
                            <iframe
                                width="560" height="315"
                                src="https://www.youtube.com/embed/F2prtmPEjOc"
                                title="The Moon Explained for Kids"
                                frameBorder="0"
                                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                allowFullScreen>
                            </iframe>
                        </div>

                        <button className="scroll-btn right" onClick={() => scroll("right")}>
                            <ChevronRight size={32}/>
                        </button>
                    </div>
                </div>
            </section>

            {/* Fun Learning Section */}
            <section className="fun-learning">
                <h2 className="section-title">Super Space Facts! ⭐</h2>
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
