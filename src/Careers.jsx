import React from "react";
import "./Careers.css";
import Road from "./Road";
import Paths from "./Paths";

const Section = ({ title, children }) => (
    <section className="section">
        <h2>{title}</h2>
        {children}
    </section>
);
const colleges = [
    {
        name: "Massachusetts Institute of Technology (MIT) - USA",
        image: "https://placehold.co/600x400",
        link: "https://web.mit.edu/",
        registration: "September - January",
        fees: "$53,000/year",
    },
    {
        name: "California Institute of Technology (Caltech) - USA",
        image: "https://placehold.co/600x400",
        link: "https://www.caltech.edu/",
        registration: "October - January",
        fees: "$56,000/year",
    },
    {
        name: "Indian Institute of Space Science and Technology (IIST) - India",
        image: "https://placehold.co/600x400",
        link: "https://www.iist.ac.in/",
        registration: "April - June",
        fees: "$2,000/year",
    },
    {
        name: "National University of Singapore (NUS) - Singapore",
        image: "https://placehold.co/600x400",
        link: "https://www.nus.edu.sg/",
        registration: "January - March",
        fees: "$40,000/year",
    },
    {
        name: "University of Cambridge - UK",
        image: "https://placehold.co/600x400",
        link: "https://www.cam.ac.uk/",
        registration: "September - December",
        fees: "$45,000/year",
    },
];

const Careers = () => {
    console.log("Rendering Careers component");

    return (
        <div className="careers-container">
            <h1 className="title">Careers in Space 🚀: Your Ultimate Guide</h1>
            <section title="📚 Career Paths">
                <Paths/>
            </section>

            <section className="college-section">
                <h2 className="college-title">Top Engineering Colleges for Space Studies</h2>
                <div className="college-grid">
                    {colleges.map((college, index) => (
                        <a href={college.link} key={index} className="college-card" target="_blank"
                           rel="noopener noreferrer">
                            <img src={college.image} alt={college.name} className="college-image"/>
                            <div className="college-info">
                                <p className="college-name">{college.name}</p>
                                <p className="college-details">🗓 Registration: {college.registration}</p>
                                <p className="college-details">💰 Fees: {college.fees}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </section>
            {/* Salary & Growth Prospects */}
            <Section title="💰 Salary & Growth Prospects">
                <div className="salary-table-container">
                    <table className="salary-table">
                        <thead>
                        <tr>
                            <th>Role</th>
                            <th>Entry Level ($)</th>
                            <th>Mid-Level ($)</th>
                            <th>Senior Level ($)</th>
                        </tr>
                        </thead>
                        <tbody>
                        {[
                            {
                                role: "Astronaut 🚀",
                                entry: "66,000 - 100,000",
                                mid: "100,000 - 150,000",
                                senior: "150,000 - 250,000+"
                            },
                            {
                                role: "Aerospace Engineer 🛰️",
                                entry: "70,000 - 90,000",
                                mid: "110,000 - 140,000",
                                senior: "150,000 - 200,000+"
                            },
                            {
                                role: "Astrophysicist 🔭",
                                entry: "60,000 - 80,000",
                                mid: "100,000 - 130,000",
                                senior: "140,000 - 180,000+"
                            },
                            {
                                role: "Satellite Engineer 🛰",
                                entry: "65,000 - 85,000",
                                mid: "95,000 - 130,000",
                                senior: "140,000 - 170,000+"
                            },
                            {
                                role: "Space Robotics Engineer 🤖",
                                entry: "75,000 - 95,000",
                                mid: "120,000 - 150,000",
                                senior: "160,000 - 200,000+"
                            },
                            {
                                role: "Space Lawyer ⚖️",
                                entry: "80,000 - 100,000",
                                mid: "120,000 - 150,000",
                                senior: "160,000 - 220,000+"
                            },

                        ].map((job, index) => (
                            <tr key={index}>
                                <td>{job.role}</td>
                                <td>${job.entry}</td>
                                <td>${job.mid}</td>
                                <td>${job.senior}</td>
                            </tr>
                        ))}
                        </tbody>
                    </table>
                </div>
            </Section>

            <Road/>

            <Section title="📚 Recommended Courses">
                <ul>
                    {[
                        {
                            name: "MIT OpenCourseWare - Aerospace Engineering",
                            url: "https://ocw.mit.edu/courses/aeronautics-and-astronautics/"
                        },
                        {
                            name: "Coursera - Space Science & Technology",
                            url: "https://www.coursera.org/courses?query=space%20science"
                        },
                        {
                            name: "edX - Astronomy & Space Exploration",
                            url: "https://www.edx.org/course/astronomy-exploring-time-and-space"
                        },
                    ].map((course, index) => (
                        <li key={index}>
                            <a href={course.url} target="_blank" rel="noopener noreferrer">
                                {course.name}
                            </a>
                        </li>
                    ))}
                </ul>
            </Section>
        </div>
    );
};

export default Careers;
