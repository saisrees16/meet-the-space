import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig"; // Ensure correct import
import { collection, getDocs } from "firebase/firestore";
import { useNavigate } from "react-router-dom";
import "./Com.css"; // Import CSS

const Community = () => {
    const [topics, setTopics] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        const fetchTopics = async () => {
            try {
                const querySnapshot = await getDocs(collection(db, "Updates")); // ✅ Fetch "discussions" collection
                const topicsData = querySnapshot.docs.map(doc => ({
                    id: doc.id,  // Firestore document ID (Title)
                    ...doc.data() // Document fields (Image, Timestamp, etc.)
                }));
                setTopics(topicsData);
            } catch (error) {
                console.error("Error fetching topics:", error);
            }
        };

        fetchTopics();
    }, []);

    return (
        <div className="community-container">
            <h2>Space Community Discussions</h2>
            <div className="topics-grid">
                {topics.length > 0 ? (
                    topics.map((topic) => (
                        <div key={topic.id} className="topic-card" onClick={() => navigate(`/discussion/${topic.id}`)}>
                            <img src={topic.image || "https://example.com/default.jpg"} alt={topic.id} className="topic-image" />
                            <h3>{topic.id}</h3> {/* Display the topic title (Firestore document ID) */}
                            <p>{topic.description || "No description available"}</p>
                        </div>
                    ))
                ) : (
                    <p>Loading topics...</p>
                )}
            </div>
        </div>
    );
};

export default Community;
