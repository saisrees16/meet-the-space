import React from 'react';
import './allColleges.css';
import mit from './assets/massachuessts.jpg';
import caltech from './assets/caltech.jpg';
import iist from './assets/iist.webp';
import nus from './assets/nus.jpg';
import cam from './assets/cam.webp';
import Stan from './assets/stan.jpg';
import mai from './assets/mai.jpg';
import tum from './assets/tum.jpg';
import uoj from './assets/uoj.jpg';
import del from './assets/delft.jpeg';

const AllColleges = () => {
    const allColleges = [
        {
            name: "Massachusetts Institute of Technology (MIT) - USA",
            image: mit,
            link: "https://web.mit.edu/",
            registration: "September - January",
            fees: "$53,000/year",
        },
        {
            name: "California Institute of Technology (Caltech) - USA",
            image: caltech,
            link: "https://www.caltech.edu/",
            registration: "October - January",
            fees: "$56,000/year",
        },
        {
            name: "Indian Institute of Space Science and Technology (IIST) - India",
            image: iist,
            link: "https://www.iist.ac.in/",
            registration: "April - June",
            fees: "$2,000/year",
        },
        {
            name: "National University of Singapore (NUS) - Singapore",
            image: nus,
            link: "https://www.nus.edu.sg/",
            registration: "January - March",
            fees: "$40,000/year",
        },
        {
            name: "University of Cambridge - UK",
            image: cam,
            link: "https://www.cam.ac.uk/",
            registration: "September - December",
            fees: "$45,000/year",
        },
        {
            name: "Stanford University - USA",
            image: Stan,
            link: "https://www.stanford.edu/",
            registration: "September - December",
            fees: "$55,000/year",
        },
        {
            name: "Moscow Aviation Institute - Russia",
            image: mai,
            link: "https://mai.ru/en/",
            registration: "June - August",
            fees: "$8,000/year",
        },
        {
            name: "Technical University of Munich - Germany",
            image: tum,
            link: "https://www.tum.de/en/",
            registration: "April - July",
            fees: "$3,000/year",
        },
        {
            name: "University of Tokyo - Japan",
            image: uoj,
            link: "https://www.u-tokyo.ac.jp/en/",
            registration: "October - December",
            fees: "$35,000/year",
        },
        {
            name: "Delft University of Technology - Netherlands",
            image: del,
            link: "https://www.tudelft.nl/en/",
            registration: "October - January",
            fees: "$15,000/year",
        }
    ];

    return (
        <div className="colleges-container">
            <div className="colleges-wrapper">
                <div className="colleges-header">
                    <h1>All Space Engineering Colleges</h1>
                    <p>Explore top institutions offering space-related programs worldwide</p>
                </div>

                <div className="colleges-grid">
                    {allColleges.map((college, index) => (
                        <a
                            href={college.link}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="college-card-link"
                        >
                            <div className="college-card">
                                <img
                                    src={college.image}
                                    alt={college.name}
                                    className="college-image"
                                />
                                <div className="college-content">
                                    <h3 className="college-title">{college.name}</h3>
                                    <div className="college-details">
                                        <p>
                                            <span className="emoji">🗓</span>
                                            <span>Registration: {college.registration}</span>
                                        </p>
                                        <p>
                                            <span className="emoji">💰</span>
                                            <span>Fees: {college.fees}</span>
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default AllColleges;