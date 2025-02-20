import { useState } from "react";

export default function Chatbot() {
    const [message, setMessage] = useState("");
    const [chat, setChat] = useState([]);
    const [loading, setLoading] = useState(false);

    const sendMessage = async () => {
        if (!message.trim()) return;

        const newChat = [...chat, { sender: "user", text: message }];
        setChat(newChat);
        setMessage("");
        setLoading(true);

        try {
            const response = await fetch(`https://api.wit.ai/message?v=20250220&q=${encodeURIComponent(message)}`, {
                headers: {
                    "Authorization": "Bearer EUGXRKOD3SOTXTW2YHKIFMFDDC2VTL75",
                    "Content-Type": "application/json"
                }
            });

            const data = await response.json();
            const botResponse = data?.entities?.intent?.[0]?.value || "I don't understand.";

            setChat([...newChat, { sender: "bot", text: botResponse }]);
        } catch (error) {
            console.error("Error:", error);
            setChat([...newChat, { sender: "bot", text: "Error: Unable to fetch response." }]);
        }

        setLoading(false);
    };

    return (
        <div className="chat-container">
            <div className="chat-box">
                {chat.map((msg, index) => (
                    <div key={index} className={msg.sender}>
                        <strong>{msg.sender === "user" ? "You" : "Bot"}:</strong> {msg.text}
                    </div>
                ))}
            </div>
            <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                placeholder="Type a message..."
            />
            <button onClick={sendMessage} disabled={loading}>
                {loading ? "Thinking..." : "Send"}
            </button>
        </div>
    );
}
