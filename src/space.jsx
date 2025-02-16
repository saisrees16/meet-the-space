import React, {useEffect, useState} from 'react';
import './space.css';

const Space = () => {
    const [selectedOrg, setSelectedOrg] = useState('nasa');
    const [selectedSection, setSelectedSection] = useState('overview');
    const [news, setNews] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [books, setBooks] = useState([]);

    useEffect(() => {
        fetch(`https://newsapi.org/v2/everything?q=${selectedOrg}&apiKey=a5a062XhtScV4vrtTDhcyOEiXvImWW7TiateyCxs`)
            .then(response => response.json())
            .then(data => setNews(data.articles.slice(0, 5)));
    }, [selectedOrg]);

    useEffect(() => {
        fetch(`https://jobs-api.com/space-jobs`)
            .then(response => response.json())
            .then(data => setJobs(data.jobs.slice(0, 5)));
    }, []);

    useEffect(() => {
        fetch(`https://api.itbook.store/1.0/search/space`)
            .then(response => response.json())
            .then(data => setBooks(data.books.slice(0, 5)));
    }, []);

    const spaceOrganizations = {
        nasa: {
            name: "NASA",
            fullName: "National Aeronautics and Space Administration",
            logo: "/api/placeholder/120/120",
            bannerImage: "/api/placeholder/1200/400",
            youtube: {
                channelName: "NASA",
                subscribers: "10.2M",
                totalViews: "1.2B",
                joinDate: "2008",
                featuredVideos: [
                    { title: "Live: NASA Astronauts Working in Space", thumbnail: "/api/placeholder/320/180", views: "2.1M", duration: "15:32", description: "Watch astronauts perform spacewalk at the ISS" },
                    { title: "Mars Perseverance Rover: Latest Updates", thumbnail: "/api/placeholder/320/180", views: "1.8M", duration: "12:45", description: "See the latest discoveries from Mars" }
                ]
            },
            currentMissions: [
                { name: "Artemis Program", status: "Active", type: "Lunar Exploration", description: "Returning humans to the Moon", launchDate: "2024-2025", image: "/api/placeholder/400/300" },
                { name: "Mars Perseverance", status: "Active", type: "Mars Exploration", description: "Exploring Mars' Jezero Crater", launchDate: "2020", image: "/api/placeholder/400/300" }
            ]
        },
        spacex: {
            name: "SpaceX",
            fullName: "Space Exploration Technologies Corp.",
            logo: "/api/placeholder/120/120",
            bannerImage: "/api/placeholder/1200/400",
            youtube: {
                channelName: "SpaceX",
                subscribers: "8.5M",
                totalViews: "900M",
                joinDate: "2006",
                featuredVideos: [
                    { title: "Starship Launch", thumbnail: "/api/placeholder/320/180", views: "3.5M", duration: "18:12", description: "Watch the historic Starship launch live" },
                    { title: "Falcon Heavy Mission", thumbnail: "/api/placeholder/320/180", views: "2.2M", duration: "16:30", description: "Highlights of the Falcon Heavy mission" }
                ]
            },
            currentMissions: [
                { name: "Starship", status: "Development", type: "Mars Colonization", description: "Developing the next-generation spacecraft", launchDate: "2023+", image: "/api/placeholder/400/300" },
                { name: "Crew Dragon", status: "Active", type: "Human Spaceflight", description: "Transporting astronauts to the ISS", launchDate: "Ongoing", image: "/api/placeholder/400/300" }
            ]
        },
        isro: {
            name: "ISRO",
            fullName: "Indian Space Research Organisation",
            logo: "/api/placeholder/120/120",
            bannerImage: "/api/placeholder/1200/400",
            youtube: {
                channelName: "ISRO",
                subscribers: "2.1M",
                totalViews: "400M",
                joinDate: "2007",
                featuredVideos: [
                    { title: "Chandrayaan-3 Landing", thumbnail: "/api/placeholder/320/180", views: "5M", duration: "12:10", description: "India's lunar landing success" },
                    { title: "Gaganyaan Mission", thumbnail: "/api/placeholder/320/180", views: "1.3M", duration: "10:45", description: "India's first human spaceflight program" }
                ]
            },
            currentMissions: [
                { name: "Gaganyaan", status: "Development", type: "Human Spaceflight", description: "India's first human space mission", launchDate: "2024", image: "/api/placeholder/400/300" },
                { name: "Chandrayaan-3", status: "Completed", type: "Lunar Exploration", description: "India's Moon landing success", launchDate: "2023", image: "/api/placeholder/400/300" }
            ]
        },
    };

    const selectedOrganization = spaceOrganizations[selectedOrg];

    return (
        <div className="app">
            <div className="organization-selector">
                {Object.entries(spaceOrganizations).map(([key, org]) => (
                    <button key={key} className={`org-button ${selectedOrg === key ? 'active' : ''}`} onClick={() => setSelectedOrg(key)}>
                        <img src={org.logo} alt={org.name} />
                        <span>{org.name}</span>
                    </button>
                ))}
            </div>

            <div className="section-selector">
                {['overview', 'youtube', 'missions', 'news', 'books', 'jobs'].map(section => (
                    <button key={section} className={`section-button ${selectedSection === section ? 'active' : ''}`} onClick={() => setSelectedSection(section)}>
                        {section.charAt(0).toUpperCase() + section.slice(1)}
                    </button>
                ))}
            </div>

            <main className="main-content">
                {selectedSection === 'overview' && (
                    <section>
                        <h2>{selectedOrganization.fullName}</h2>
                        <img src={selectedOrganization.bannerImage} alt="Banner" className="banner" />
                    </section>
                )}

                {selectedSection === 'youtube' && (
                    <section>
                        <h3>{selectedOrganization.youtube.channelName} on YouTube</h3>
                        <p>Subscribers: {selectedOrganization.youtube.subscribers}</p>
                        <div className="videos-grid">
                            {selectedOrganization.youtube.featuredVideos.map((video, index) => (
                                <div key={index} className="video-card">
                                    <iframe width="320" height="180" src={`https://www.youtube.com/embed/${video.videoId}`} title={video.title} allowFullScreen></iframe>
                                    <h4>{video.title}</h4>
                                    <p>{video.views} views</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {selectedSection === 'missions' && (
                    <section>
                        <h3>Current Missions</h3>
                        <div className="missions-grid">
                            {selectedOrganization.currentMissions.map((mission, index) => (
                                <div key={index} className="mission-card">
                                    <img src={mission.image} alt={mission.name} />
                                    <h4>{mission.name}</h4>
                                    <p>{mission.description}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {selectedSection === 'news' && (
                    <section>
                        <h3>Latest News</h3>
                        <ul>
                            {news.map((article, index) => (
                                <li key={index}>
                                    <a href={article.url} target="_blank" rel="noopener noreferrer">{article.title}</a>
                                </li>
                            ))}
                        </ul>
                    </section>
                )}

                {selectedSection === 'books' && (
                    <section>
                        <h3>Space Books</h3>
                        <div className="books-grid">
                            {books.map((book, index) => (
                                <div key={index} className="book-card">
                                    <img src={book.image} alt={book.title} />
                                    <h4>{book.title}</h4>
                                    <p>Price: {book.price}</p>
                                    <p>Rating: {book.rating}</p>
                                </div>
                            ))}
                        </div>
                    </section>
                )}

                {selectedSection === 'jobs' && (
                    <section>
                        <h3>Job Opportunities</h3>
                        <ul>
                            {jobs.map((job, index) => (
                                <li key={index}>
                                    <strong>{job.title}</strong> - {job.company}
                                </li>
                            ))}
                        </ul>
                    </section>
                )}
            </main>
        </div>
    );
};


export default Space;
