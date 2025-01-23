import React from "react";
import "./Colleges.css";

const Colleges = () => {
    return (
        <div className="colleges">
            <h1 className="title">Colleges</h1>
            <div className="cards">
                <div className="card">
                    <img src="https://placehold.co/250x100" alt="college" />
                    <div className="card-content">
                        <h2>College 1</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quae.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://placehold.co/250x100" alt="college" />
                    <div className="card-content">
                        <h2>College 2</h2>
                        <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://placehold.co/250x100" alt="college" />
                    <div className="card-content">
                        <h2>College 3</h2>
                        <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://placehold.co/250x100" alt="college" />
                    <div className="card-content">
                        <h2>College 4</h2>
                        <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://placehold.co/250x100" alt="college" />
                    <div className="card-content">
                        <h2>College 5</h2>
                        <p>Voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                    </div>
                </div>
                <div className="card">
                    <img src="https://placehold.co/250x100" alt="college" />
                    <div className="card-content">
                        <h2>College 6</h2>
                        <p>Cupidatat non proident, sunt in culpa qui officia deserunt mollit anim.</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Colleges;