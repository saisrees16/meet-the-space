import React from 'react';
import './allcourses.css';
import mitocw from './assets/mitocw.jpg';
import cou from './assets/coursera.png';
import edx from './assets/edx.jpg';
import nstem from './assets/nstem.png';
import ss from './assets/stanspace.jpg';
import esa from './assets/esa.jpg';
import uda from './assets/uda.png';
import fl from './assets/fl.svg';
import isu from './assets/isu.jpg';

const Allcourses = () => {
    const allCourses = [
        {
            name: "MIT OpenCourseWare - Aerospace Engineering",
            url: "https://ocw.mit.edu/courses/aeronautics-and-astronautics/",
            image: mitocw,
            description: "Explore advanced topics in aerospace engineering and astronautics."
        },
        {
            name: "Coursera - Space Science & Technology",
            url: "https://www.coursera.org/courses?query=space%20science",
            image: cou,
            description: "Learn about space science, technology, and exploration fundamentals."
        },
        {
            name: "edX - Astronomy & Space Exploration",
            url: "https://www.edx.org/course/astronomy-exploring-time-and-space",
            image: edx,
            description: "Discover the mysteries of space through comprehensive astronomy courses."
        },
        {
            name: "NASA STEM Engagement",
            url: "https://www.nasa.gov/stem/",
            image: nstem,
            description: "Access NASA's educational resources and space science curriculum."
        },
        {
            name: "Stanford Online - Space Systems Engineering",
            url: "https://online.stanford.edu/courses/",
            image: ss,
            description: "Master the principles of space systems design and engineering."
        },
        {
            name: "ESA Education",
            url: "https://www.esa.int/Education",
            image: esa,
            description: "European Space Agency's educational programs and resources."
        },
        {
            name: "Udacity - Aerospace Engineering",
            url: "https://www.udacity.com/course/intro-to-aerospace-engineering--av001",
            image: uda,
            description: "Comprehensive introduction to aerospace engineering principles."
        },
        {
            name: "FutureLearn - Space Science Courses",
            url: "https://www.futurelearn.com/subjects/science-engineering-and-maths-courses/astronomy",
            image: fl,
            description: "Learn about space exploration and astronomical discoveries."
        },
        {
            name: "ISU - Space Studies Program",
            url: "https://www.isunet.edu/",
            image: isu,
            description: "International Space University's intensive space education program."
        }
    ];

    return (
        <div className="courses-page">
            <div className="courses-container">
                <div className="courses-headerz">
                    <h1>Space Science & Engineering Courses</h1>
                    <p>Discover comprehensive courses and educational resources in space science, engineering, and exploration</p>
                </div>

                <div className="courses-gridz">
                    {allCourses.map((course, index) => (
                        <a
                            href={course.url}
                            key={index}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="course-cardz"
                        >
                            <img
                                src={course.image}
                                alt={course.name}
                                className="course-imagez"
                            />
                            <div className="course-infoz">
                                <h3 className="course-namez">{course.name}</h3>
                                <p className="course-descriptionz">{course.description}</p>
                            </div>
                        </a>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Allcourses;