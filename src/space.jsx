import React, {useEffect, useState} from 'react';
import './space.css';
import nasa from './assets/nasa.png';
import spacex from './assets/spacex.png';
import isro from './assets/isro.png';

const Space = () => {
    const [selectedOrg, setSelectedOrg] = useState('nasa');
    const [selectedSection, setSelectedSection] = useState('overview');
    const [news, setNews] = useState([]);
    const [jobs, setJobs] = useState([]);
    const [books, setBooks] = useState([]);




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
            logo: nasa,
            bannerImage: "/api/placeholder/1200/400",
            youtube: {
                channelName: "NASA",
                subscribers: "10.2M",
                totalViews: "1.2B",
                joinDate: "2008",
        featuredVideos: [
        {
            "title": "Live: NASA Astronauts Working in Space",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "-Y04Zic1-r4",
            "views": "2.1M",
            "duration": "15:32",
            "description": "Watch astronauts perform spacewalk at the ISS"
        },
        {
            "title": "Mars Perseverance Rover: Latest Updates",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "CIaHiGbFybQ",
            "views": "1.8M",
            "duration": "12:45",
            "description": "See the latest discoveries from Mars"
        },
        {
            "title": "James Webb Telescope: Unveiling the Universe",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "2pux7v9qJ58",
            "views": "3.5M",
            "duration": "18:20",
            "description": "Discover the latest images from the JWST"
        },
        {
            "title": "NASA’s Artemis I: Journey to the Moon",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "-YNZiasRG0Q",
            "views": "2.3M",
            "duration": "14:10",
            "description": "See the highlights of Artemis I mission"
        },
        {
            "title": "Hubble’s Greatest Discoveries",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "-Y04Zic1-r4",
            "views": "4.1M",
            "duration": "20:45",
            "description": "Explore the breathtaking images captured by Hubble"
        },
        {
            "title": "How Long Does it Take to Get to the Moon, Mars, Jupiter? NASA Expert",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "4gDntIl2JSc?si=8SoS-gMGj22iWvF0",
            "views": "3.2K",
            "duration": "1:19",
            "description": "A NASA expert explains space travel times."
        },
        {
            "title": "Why Does the Moon Look Larger at the Horizon? NASA Expert",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "yuxWyIe8TIc?si=DgUQBBq-YU6meWrP",
            "views": "36K",
            "duration": "7:45",
            "description": "Learn why the Moon appears larger near the horizon."
        },
        {
            "title": "Artemis II to the Moon: Launch to Splashdown (NASA Mission Animation)",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "Ke6XX8FHOHM?si=8um0N0iFVeHWlvDa",
            "views": "721K",
            "duration": "7:45",
            "description": "Watch an animation of Artemis II's journey to the Moon."
        },
        {
            "title": "NASA’s Day of Remembrance 2025",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "6pHKGo9bUZw?si=5_pVHFa_TaEyGUMe",
            "views": "86K",
            "duration": "2:46",
            "description": "Honoring NASA astronauts who made the ultimate sacrifice."
        },
        {
            "title": "Planetary Defenders (Official NASA Trailer)",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "xIjuBrPlxTU?si=WEpHItwwed7D5CWI",
            "views": "147K",
            "duration": "2:19",
            "description": "A NASA mission dedicated to planetary defense."
        },
        {
            "title": "Administrator Nelson, Deputy Administrator Melroy Bid NASA Farewell",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "XQgTNI8uow0?si=j6FZRqqtvNCF3tkD",
            "views": "34K",
            "duration": "5:43",
            "description": "A farewell message from NASA’s leaders."
        },
        {
            "title": "NASA 2025: To the Moon, Mars, and Beyond",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "PPQ29WRT-rU?si=6Q1JR12-qKb5aytM",
            "views": "358K",
            "duration": "2:18",
            "description": "NASA’s roadmap for space exploration in 2025."
        },
        {
            "title": "Space Station Astronauts Deliver a Christmas Message for 2024",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "oYMTXZ1a2NU?si=TY9SVby5XQ1sBAFp",
            "views": "971K",
            "duration": "2:10",
            "description": "A holiday message from astronauts aboard the ISS."
        },
        {
            "title": "Artemis Accords: Celebrating 50 Country Signatories",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "plS6ijeJjf4?si=uGbvTMjw2c8Do_ai",
            "views": "24K",
            "duration": "1:07",
            "description": "NASA celebrates international cooperation in space."
        },
        {
            "title": "NASA: Best of 2024",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "pvjzva-q58Y?si=mMp9HDtA23OgL81v",
            "views": "267K",
            "duration": "2:50",
            "description": "NASA’s highlights from the year 2024."
        },
        {
            "title": "Space Station Astronauts Deliver a Thanksgiving Message for 2024",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "DO2tTUmoXmk?si=tYIdfbIRBqOEE1jP",
            "views": "139K",
            "duration": "2:00",
            "description": "A special Thanksgiving message from space."
        },
        {
            "title": "NASA Rocket Engine Fireplace - 8 Hours in 4K",
            "thumbnail": "/api/placeholder/320/180",
            "videoId": "_cgTVTwu4nw?si=NEunRtYVaN6L-wiB",
            "views": "560K",
            "duration": "8:00:29",
            "description": "Relax with 8 hours of NASA’s rocket engine sounds."
        }
    ]
    },
    currentMissions: [
                    {
                        "name": "Artemis Program",
                        "status": "Active",
                        "type": "Lunar Exploration",
                        "description": "Returning humans to the Moon",
                        "launchDate": "2024-2025",
                        "image": "/api/placeholder/400/300"
                    },
                    {
                        "name": "Mars Perseverance",
                        "status": "Active",
                        "type": "Mars Exploration",
                        "description": "Exploring Mars' Jezero Crater",
                        "launchDate": "2020",
                        "image": "/api/placeholder/400/300"
                    },
                    {
                        "name": "James Webb Space Telescope",
                        "status": "Active",
                        "type": "Astronomy",
                        "description": "Observing the universe in infrared",
                        "launchDate": "2021",
                        "image": "/api/placeholder/400/300"
                    },
                    {
                        "name": "International Space Station",
                        "status": "Active",
                        "type": "Human Spaceflight",
                        "description": "Microgravity research and astronaut training",
                        "launchDate": "1998",
                        "image": "/api/placeholder/400/300"
                    },
                    {
                        "name": "Europa Clipper",
                        "status": "Upcoming",
                        "type": "Planetary Exploration",
                        "description": "Investigating Jupiter's icy moon Europa",
                        "launchDate": "2024",
                        "image": "/api/placeholder/400/300"
                    }
                ]
        },
    spacex: {
            name: "SpaceX",
            fullName: "Space Exploration Technologies Corp.",
            logo: spacex,
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
            logo: isro,
            bannerImage: "/api/placeholder/1200/400",
            youtube: {
                channelName: "ISRO",
                subscribers: "2.1M",
                totalViews: "400M",
                joinDate: "2007",
                featuredVideos: [
                    { title: "Chandrayaan-3 Landing", thumbnail: "https://www.youtube.com/live/DLA_64yz8Ss?si=tXw-S1DfJrWBcFvH", views: "5M", duration: "12:10", description: "India's lunar landing success" },
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
                        <div className="missions-grid" onClick={() => (window.location.href = "/meet-the-space/Newshub")}>
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
