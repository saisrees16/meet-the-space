import React, { useState, useEffect } from 'react';
import { Rocket, Briefcase, Globe } from 'lucide-react';
import './space.css';

const SpaceStationsPlatform = () => {
    const [selectedAgency, setSelectedAgency] = useState('nasa');
    const [stars, setStars] = useState([]);

    useEffect(() => {
        const generateStars = () => {
            const newStars = Array.from({ length: 100 }, () => ({
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                size: `${Math.random() * 3 + 1}px`,
                animationDelay: `${Math.random() * 3}s`
            }));
            setStars(newStars);
        };
        generateStars();
    }, []);

    const agencies = {
        nasa: {
            name: 'NASA',
            description: 'Leading space exploration agency pioneering new frontiers.',
            stats: {
                activeProjects: 154,
                totalMissions: 1372,
                employees: 17373,
                budget: 24.5
            },
            missions: [
                { name: 'ISS', year: '1998-Present', description: 'Low Earth orbit research station.' },
                { name: 'Artemis', year: '2020-Present', description: 'Lunar exploration missions.' },
                { name: 'Mars Rover', year: '2021-Present', description: 'Exploration of Mars terrain.' }
            ],
            careers: ['Astronaut Corps', 'Flight Controllers', 'Research Scientists', 'Engineers']
        },
        // Additional agencies (SpaceX, ISRO) can be added here.
    };

    return (
        <div className="space-platform">
            <div className="space-bg">
                {stars.map((star, index) => (
                    <div key={index} className="star" style={star} />
                ))}
            </div>

            <header className="header">
                <h1>🚀 Space Exploration Hub</h1>
                <p>Discover the Future of Space Travel</p>
            </header>

            <div className="tabs">
                {Object.keys(agencies).map(agency => (
                    <button key={agency} className={`tab-button ${selectedAgency === agency ? 'active' : ''}`} onClick={() => setSelectedAgency(agency)}>
                        {agencies[agency].name}
                    </button>
                ))}
            </div>

            <div className="card">
                <div className="card-header">
                    <Globe className="icon" />
                    <h2>{agencies[selectedAgency].name} Overview</h2>
                </div>
                <div className="stats-container">
                    {Object.entries(agencies[selectedAgency].stats).map(([key, value], index) => (
                        <div key={index} className="stat-card">
                            <div className="stat-label">{key.replace(/([A-Z])/g, ' $1')}</div>
                            <div className="progress-bar">
                                <div className="progress" style={{ width: `${Math.min(value / 2000 * 100, 100)}%` }}></div>
                            </div>
                            <div className="stat-number">{typeof value === 'number' ? value.toLocaleString() : value}</div>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <Rocket className="icon" />
                    <h2>Space Missions</h2>
                </div>
                <div className="missions-grid">
                    {agencies[selectedAgency].missions.map((mission, index) => (
                        <div key={index} className="mission-card">
                            <h3>{mission.name}</h3>
                            <div className="mission-year">{mission.year}</div>
                            <p>{mission.description}</p>
                        </div>
                    ))}
                </div>
            </div>

            <div className="card">
                <div className="card-header">
                    <Briefcase className="icon" />
                    <h2>Career Opportunities</h2>
                </div>
                <ul className="careers-list">
                    {agencies[selectedAgency].careers.map((career, index) => (
                        <li key={index}>{career}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default SpaceStationsPlatform;