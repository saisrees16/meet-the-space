import React from "react";
import "./Games.css";

const Games = () => {
    const handleGameRedirect = (path) => {
        window.location.href = path;
    };

    return (
        <section className="gamesz">
            <div className="games-headerz">
                <h2>🌟 Fun Space Games! 🚀</h2>
                <p>Explore and play exciting space-themed games!</p>
            </div>

            <div className="games-containerz">
                {/* Jigsaw Puzzle */}
                <div className="game-cardz" onClick={() => handleGameRedirect('/Jigsaw')}>
                    <span className="game-titlez">🧩 Jigsaw Puzzle</span>
                    <p>Piece together space images!</p>
                    <button>P L A Y</button>
                </div>

                {/* Space Adventure */}
                <div className="game-cardz" onClick={() => handleGameRedirect('/SpaceAdventure')}>
                    <span className="game-titlez">🚀 Space Adventure</span>
                    <p>Explore planets and complete missions!</p>
                    <button>P L A Y</button>
                </div>

                {/* Quiz Time */}
                <div className="game-cardz" onClick={() => handleGameRedirect('/Quiz')}>
                    <span className="game-titlez">❓ Quiz Time</span>
                    <p>Test your space knowledge!</p>
                    <button>P L A Y</button>
                </div>

                {/* Space Memory Match */}
                <div className="game-cardz" onClick={() => handleGameRedirect('/MemoryMatch')}>
                    <span className="game-titlez">🧠 Memory Match</span>
                    <p>Match space-themed cards!</p>
                    <button>P L A Y</button>
                </div>

                {/* Rocket Builder */}
                <div className="game-cardz" onClick={() => handleGameRedirect('/RocketBuilder')}>
                    <span className="game-titlez">🚀 Rocket Builder</span>
                    <p>Design and launch your own rocket!</p>
                    <button>P L A Y</button>
                </div>

                {/* Space Maze */}
                <div className="game-cardz" onClick={() => handleGameRedirect('/SpaceMaze')}>
                    <span className="game-titlez">🛰️ Space Maze</span>
                    <p>Guide your spaceship through a tricky maze!</p>
                    <button>P L A Y</button>
                </div>
            </div>
        </section>
    );
};

export default Games;
