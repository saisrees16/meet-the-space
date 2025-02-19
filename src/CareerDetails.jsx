import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import {
    Rocket,
    Cog,
    Brain,
    Satellite,
    CircuitBoard,
    GalleryVerticalEnd
} from "lucide-react";
import "./careerDetails.css";

const careerData = {
    "Astronaut": {
        title: "Astronaut",
        icon: <Rocket className="icon-large icon-astronaut"/>,
        description: "Astronauts are highly trained professionals who operate spacecraft, conduct scientific experiments, and explore space. They play a crucial role in advancing our understanding of the universe and pushing the boundaries of human exploration.",
        details: {
            salary: "$104,000 - $161,000 per year",
            skills: ["Physical Fitness", "Problem Solving", "Team Collaboration", "Stress Management", "Technical Expertise", "Communication"],
            education: "Master's or Ph.D. in Engineering, Biological Science, Physical Science, or Mathematics",
            requirements: ["Minimum 3 years professional experience", "Pass NASA physical examination", "20/20 vision", "Blood pressure not exceeding 140/90"],
            dailyTasks: [
                "Conducting scientific experiments in space",
                "Maintaining spacecraft systems",
                "Physical exercise (2 hours daily)",
                "Documentation and reporting",
                "Communication with ground control"
            ]
        },
        jobOpportunities: {
            companies: [
                {
                    name: "NASA",
                    location: "Multiple Locations, USA",
                    description: "Join NASA's astronaut corps and be part of humanity's next giant leap.",
                    positions: ["Astronaut Candidate", "Research Specialist", "Mission Specialist"],
                    website: "https://www.nasa.gov/careers"
                },
                {
                    name: "SpaceX",
                    location: "Hawthorne, CA",
                    description: "Be part of the commercial space revolution with SpaceX's human spaceflight program.",
                    positions: ["Commercial Astronaut", "Flight Operations"],
                    website: "https://www.spacex.com/careers"
                },
                {
                    name: "Blue Origin",
                    location: "Kent, WA",
                    description: "Join Blue Origin's mission to enable human space exploration.",
                    positions: ["Test Astronaut", "Space Operations Specialist"],
                    website: "https://www.blueorigin.com/careers"
                }
            ],
            resources: [
                {
                    title: "NASA Astronaut Selection Program",
                    url: "https://www.nasa.gov/astronauts/become-an-astronaut/"
                },
                {
                    title: "European Space Agency Astronaut Program",
                    url: "https://www.esa.int/About_Us/Careers_at_ESA"
                },
                {
                    title: "International Space Station Career Guide",
                    url: "https://www.nasa.gov/iss"
                }
            ],
            training: [
                "Advanced Space Training Program - Kennedy Space Center",
                "International Space University",
                "Naval Test Pilot School"
            ]
        }
    },
    "Aerospace Engineer": {
        title: "Aerospace Engineer",
        icon: <Cog className="icon-large icon-engineer"/>,
        description: "Aerospace Engineers design, develop, and test aircraft, spacecraft, satellites, and missiles. They are at the forefront of innovation in both aviation and space exploration.",
        details: {
            salary: "$85,000 - $155,000 per year",
            skills: ["CAD Software", "Propulsion Systems", "Aerodynamics", "Material Science", "Project Management"],
            education: "Bachelor's or Master's in Aerospace Engineering",
            requirements: ["Strong mathematical background", "Professional Engineering license", "Experience with simulation software"],
            dailyTasks: [
                "Designing aerospace systems and components",
                "Running aerodynamic simulations",
                "Analyzing test data",
                "Collaborating with cross-functional teams",
                "Writing technical documentation"
            ]
        },
        jobOpportunities: {
            companies: [
                {
                    name: "Boeing",
                    location: "Multiple Locations, USA",
                    description: "Join Boeing's aerospace team and shape the future of flight.",
                    positions: ["Aerospace Engineer", "Systems Engineer", "Propulsion Engineer"],
                    website: "https://www.boeing.com/careers"
                },
                {
                    name: "Lockheed Martin",
                    location: "Bethesda, MD",
                    description: "Be part of innovative aerospace solutions at Lockheed Martin.",
                    positions: ["Aircraft Engineer", "Space Systems Engineer"],
                    website: "https://www.lockheedmartin.com/careers"
                }
            ],
            resources: [
                {
                    title: "American Institute of Aeronautics and Astronautics",
                    url: "https://www.aiaa.org/"
                },
                {
                    title: "Aerospace Engineering Career Guide",
                    url: "https://www.nasa.gov/careers/aerospace"
                }
            ],
            training: [
                "Boeing Engineering Leadership Program",
                "Space Systems Engineering Course",
                "Advanced CAD Certification"
            ]
        }
    },
    "Astrophysicist": {
        title: "Astrophysicist",
        icon: <Brain className="icon-large icon-physicist"/>,
        description: "Astrophysicists study the physical properties of celestial objects, including stars, planets, galaxies, and black holes. They work to understand the fundamental laws that govern the universe.",
        details: {
            salary: "$75,000 - $140,000 per year",
            skills: ["Advanced Mathematics", "Data Analysis", "Programming", "Research Methods", "Scientific Writing"],
            education: "Ph.D. in Astrophysics or related field",
            requirements: ["Published research", "Experience with astronomical software", "Advanced computational skills"],
            dailyTasks: [
                "Analyzing astronomical data",
                "Writing research papers",
                "Operating telescopes",
                "Developing theoretical models",
                "Collaborating with international research teams"
            ]
        },
        jobOpportunities: {
            companies: [
                {
                    name: "NASA",
                    location: "Multiple Locations, USA",
                    description: "Join NASA's astrophysics research team.",
                    positions: ["Research Scientist", "Data Analyst", "Theoretical Physicist"],
                    website: "https://www.nasa.gov/careers"
                }
            ],
            resources: [
                {
                    title: "American Astronomical Society",
                    url: "https://aas.org/"
                }
            ],
            training: [
                "Advanced Astrophysics Programs",
                "Data Science in Astronomy",
                "Computational Physics Training"
            ]
        }
    },
    "Satellite Engineer": {
        title: "Satellite Engineer",
        icon: <Satellite className="icon-large icon-satellite"/>,
        description: "Satellite Engineers specialize in designing, building, and maintaining satellites for communications, navigation, and Earth observation. They ensure reliable satellite operations in the harsh environment of space.",
        details: {
            salary: "$80,000 - $145,000 per year",
            skills: ["RF Systems", "Signal Processing", "Orbital Mechanics", "Electronics", "Testing Procedures"],
            education: "Bachelor's or Master's in Electrical/Communications Engineering",
            requirements: ["Knowledge of satellite systems", "Experience with RF design", "Understanding of space environment"],
            dailyTasks: [
                "Designing satellite subsystems",
                "Monitoring satellite health",
                "Conducting systems tests",
                "Troubleshooting communications issues",
                "Coordinating with launch teams"
            ]
        },
        jobOpportunities: {
            companies: [
                {
                    name: "SES",
                    location: "Multiple Locations, Global",
                    description: "Join the world's leading satellite operator.",
                    positions: ["Satellite Engineer", "Systems Engineer", "RF Engineer"],
                    website: "https://www.ses.com/careers"
                }
            ],
            resources: [
                {
                    title: "Satellite Industry Association",
                    url: "https://sia.org/"
                }
            ],
            training: [
                "Satellite Communications Engineering",
                "RF Systems Design",
                "Space Systems Operations"
            ]
        }
    },
    "Space Robotics Engineer": {
        title: "Space Robotics Engineer",
        icon: <CircuitBoard className="icon-large icon-robotics"/>,
        description: "Space Robotics Engineers develop and maintain robotic systems for space exploration, including rovers, robotic arms, and automated maintenance systems for spacecraft and space stations.",
        details: {
            salary: "$90,000 - $160,000 per year",
            skills: ["Robotics", "Control Systems", "AI/ML", "Computer Vision", "Mechanical Design"],
            education: "Master's in Robotics Engineering or related field",
            requirements: ["Programming expertise", "Experience with robotic systems", "Knowledge of space environment constraints"],
            dailyTasks: [
                "Designing robotic systems",
                "Programming control algorithms",
                "Testing in simulated environments",
                "Developing AI capabilities",
                "Optimizing performance parameters"
            ]
        },
        jobOpportunities: {
            companies: [
                {
                    name: "NASA JPL",
                    location: "Pasadena, CA",
                    description: "Build the next generation of space robots.",
                    positions: ["Robotics Engineer", "Control Systems Engineer", "AI Specialist"],
                    website: "https://jpl.nasa.gov/careers"
                }
            ],
            resources: [
                {
                    title: "IEEE Robotics and Automation Society",
                    url: "https://www.ieee-ras.org/"
                }
            ],
            training: [
                "Space Robotics Certification",
                "Advanced Control Systems",
                "AI in Space Applications"
            ]
        }
    },
    "Space Lawyer": {
        title: "Space Lawyer",
        icon: <GalleryVerticalEnd className="icon-large icon-lawyer"/>,
        description: "Space Lawyers specialize in space law and policy, handling legal matters related to space exploration, satellite deployment, and commercial space activities. They work with international space law and treaties.",
        details: {
            salary: "$95,000 - $180,000 per year",
            skills: ["International Law", "Contract Negotiation", "Policy Analysis", "Regulatory Compliance", "Dispute Resolution"],
            education: "J.D. with focus on Space Law or International Law",
            requirements: ["Bar admission", "Knowledge of space treaties", "Understanding of space industry"],
            dailyTasks: [
                "Reviewing space activity permits",
                "Drafting commercial space agreements",
                "Advising on regulatory compliance",
                "Participating in policy development",
                "Resolving international disputes"
            ]
        },
        jobOpportunities: {
            companies: [
                {
                    name: "Space Law Firms",
                    location: "Multiple Locations, Global",
                    description: "Join specialized space law practices.",
                    positions: ["Space Law Attorney", "Policy Advisor", "Regulatory Specialist"],
                    website: "https://www.spacelaw.org"
                }
            ],
            resources: [
                {
                    title: "International Institute of Space Law",
                    url: "https://iislweb.org/"
                }
            ],
            training: [
                "Space Law Certification",
                "International Space Treaties Course",
                "Commercial Space Law Program"
            ]
        }
    }
};

const CareerDetails = () => {
    const location = useLocation();
    const navigate = useNavigate();
    const selectedCareer = location.state?.career;
    const careerInfo = selectedCareer ? careerData[selectedCareer] : null;

    return (
        <div className="page-containerl">
            <div className="sidebarl">
                <h3>Space Careers</h3>
                <ul className="career-list">
                    {Object.keys(careerData).map((career) => (
                        <li
                            key={career}
                            onClick={() => navigate("/Options", { state: { career } })}
                            className={`career-item ${selectedCareer === career ? 'active' : ''}`}
                        >
                            <div className="career-icon">
                                {careerData[career].icon}
                            </div>
                            <span>{career}</span>
                        </li>
                    ))}
                </ul>
            </div>

            <div className="main-contentl">
                {careerInfo ? (
                    <div className="cardl">
                        <h3>Job Opportunities</h3>
                        <div className="companies-grid">
                            {careerInfo.jobOpportunities.companies.map((company, index) => (
                                <div key={index} className="company-card">
                                    <h4>{company.name}</h4>
                                    <p className="location">{company.location}</p>
                                    <p>{company.description}</p>
                                    <div className="positions">
                                        {company.positions.map((position, idx) => (
                                            <span key={idx} className="skill-tag">{position}</span>
                                        ))}
                                    </div>
                                    <a href={company.website} target="_blank" rel="noopener noreferrer"
                                       className="view-jobs-button">
                                        View Jobs
                                    </a>
                                </div>
                            ))}
                        </div>

                        <h3>Resources & Training</h3>
                        <ul className="resources-list">
                            {careerInfo.jobOpportunities.resources.map((resource, index) => (
                                <li key={index}>
                                    <a href={resource.url} target="_blank" rel="noopener noreferrer">
                                        {resource.title}
                                    </a>
                                </li>
                            ))}
                        </ul>

                        <h3>Training Programs</h3>
                        <ul className="training-list">
                            {careerInfo.jobOpportunities.training.map((program, index) => (
                                <li key={index}>{program}</li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="empty-state">
                        <p>Select a career from the sidebar to view details</p>
                    </div>
                )}
            </div>
        </div>
    );
};

export default CareerDetails;