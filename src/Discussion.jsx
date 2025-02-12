import React, { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, addDoc, query, orderBy, onSnapshot, serverTimestamp } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import './Discussion.css';

const Discussion = () => {
    const [messages, setMessages] = useState([]);
    const [newMessage, setNewMessage] = useState("");
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const auth = getAuth();
    const user = auth.currentUser;

    useEffect(() => {
        const q = query(collection(db, "discussions"), orderBy("timestamp", "desc"));
        const unsubscribe = onSnapshot(q, (querySnapshot) => {
            setMessages(querySnapshot.docs.map(doc => ({ id: doc.id, ...doc.data() })));
        });

        return () => unsubscribe();
    }, []);

    const postMessage = async () => {
        if (!user) {
            alert("Please login to post a message!");
            return;
        }
        if (newMessage.trim() === "") return;

        try {
            await addDoc(collection(db, "discussions"), {
                text: newMessage,
                email: user.email,
                timestamp: serverTimestamp()
            });

            setNewMessage("");
            setIsPopupOpen(false);
        } catch (error) {
            console.error("Error posting message:", error);
            alert("Failed to post message. Please try again.");
        }
    };

    return (
        <div className="layout-container">
            <div className="discussion-container">
                <div className="discussion-header">
                    <h2>💬 Space Discussion Forum</h2>
                    <button
                        className="create-post-btn header-post-btn"
                        onClick={() => setIsPopupOpen(true)}
                    >
                        Create New Post
                    </button>
                </div>
                <div className="messages-list">
                    {messages.length > 0 ? (
                        messages.map((msg) => (
                            <div key={msg.id} className="message-card">
                                <p className="message-text">{msg.text}</p>
                                <p className="message-info">
                                    <strong>{msg.email}</strong> • {msg.timestamp?.toDate().toLocaleString()}
                                </p>
                            </div>
                        ))
                    ) : (
                        <p className="no-messages">No messages yet. Be the first to post!</p>
                    )}
                </div>
            </div>

            {isPopupOpen && (
                <div className="popup-overlay">
                    <div className="popup-content">
                        <h3>Create a New Post</h3>
                        <textarea
                            value={newMessage}
                            onChange={(e) => setNewMessage(e.target.value)}
                            placeholder="What's on your mind?"
                        />
                        <div className="popup-actions">
                            <button
                                className="cancel-btn"
                                onClick={() => setIsPopupOpen(false)}
                            >
                                Cancel
                            </button>
                            <button
                                className="post-btn"
                                onClick={postMessage}
                            >
                                Post
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </div>
    );
};

export default Discussion;