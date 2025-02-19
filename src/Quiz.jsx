import React, { useState } from "react";
import { collection, addDoc, query, orderBy, getDocs } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth"; // Import Firebase hooks
import { db } from "./firebaseConfig.js";
import "./quiz.css";

const auth = getAuth();
const questions = [
    {
        question: "What is the largest planet in our solar system?",
        options: ["Saturn", "Jupiter", "Neptune", "Uranus"],
        correct: 1,
        explanation: "Jupiter is the largest planet in our solar system. It's so big that all other planets in our solar system could fit inside Jupiter!"
    },
    {
        question: "What causes a solar eclipse?",
        options: [
            "Earth passing between Sun and Moon",
            "Moon passing between Earth and Sun",
            "Sun passing between Earth and Moon",
            "Venus passing between Earth and Sun"
        ],
        correct: 1,
        explanation: "A solar eclipse occurs when the Moon passes between the Earth and the Sun, temporarily blocking some or all of the Sun's light from reaching Earth."
    },
    {
        question: "What is a black hole?",
        options: [
            "A dead star",
            "An empty region of space",
            "A region where gravity is so strong nothing can escape",
            "A hole in the ozone layer"
        ],
        correct: 2,
        explanation: "A black hole is a region of spacetime where gravity is so strong that nothing, not even light, can escape from it."
    },
    {
        question: "How long does it take light from the Sun to reach Earth?",
        options: ["8 minutes", "1 second", "24 hours", "1 year"],
        correct: 0,
        explanation: "It takes approximately 8 minutes and 20 seconds for light to travel from the Sun to Earth."
    },
    {
        question: "What is a nebula?",
        options: [
            "A type of planet",
            "A cloud of gas and dust in space",
            "A small moon",
            "A type of star"
        ],
        correct: 1,
        explanation: "A nebula is a giant cloud of gas and dust in space. Some nebulae are regions where new stars are being formed."
    }
];
const SpaceQuiz = () => {
    const [user] = useAuthState(auth); // Get current user
    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [score, setScore] = useState(0);
    const [showFeedback, setShowFeedback] = useState(false);
    const [selectedAnswer, setSelectedAnswer] = useState(null);
    const [gameOver, setGameOver] = useState(false);
    const [showLeaderboard, setShowLeaderboard] = useState(false);
    const [leaderboard, setLeaderboard] = useState([]);

    // If the user is not logged in, show a message
    if (!user) {
        return (
            <div className="quiz-container">
                <h1 className="quiz-title">Please Log In</h1>
                <p className="login-message">You need to be logged in to take the quiz.</p>
                <button className="login-button" onClick={() => window.location.href = "/meet-the-space/Login"}>
                    Go to Login
                </button>
            </div>
        );
    }

    const handleAnswer = (selectedIndex) => {
        setSelectedAnswer(selectedIndex);
        setShowFeedback(true);

        if (selectedIndex === questions[currentQuestion].correct) {
            setScore(score + 1);
        }
    };

    const handleNext = () => {
        setShowFeedback(false);
        setSelectedAnswer(null);

        if (currentQuestion + 1 < questions.length) {
            setCurrentQuestion(currentQuestion + 1);
        } else {
            saveScore();
            setGameOver(true);
        }
    };

    const saveScore = async () => {
        try {
            await addDoc(collection(db, "scores"), {
                email: user.email, // User is guaranteed to exist now
                score: score,
                timestamp: new Date(),
            });
        } catch (error) {
            console.error("Error saving score:", error);
        }
    };

    const fetchLeaderboard = async () => {
        console.log("Fetching leaderboard..."); // Debugging log
        try {
            const q = query(collection(db, "scores"), orderBy("score", "desc"));
            const querySnapshot = await getDocs(q);
            const scores = querySnapshot.docs.map((doc) => ({
                id: doc.id,
                ...doc.data(),
            }));
            console.log("Fetched scores:", scores); // Debugging log
            setLeaderboard(scores);
            setShowLeaderboard(true);
        } catch (error) {
            console.error("Error fetching leaderboard:", error);
        }
    };


    const restartGame = () => {
        setCurrentQuestion(0);
        setScore(0);
        setShowFeedback(false);
        setSelectedAnswer(null);
        setGameOver(false);
        setShowLeaderboard(false);
    };

    if (showLeaderboard) {
        return (
            <div className="quiz-container">
                <h1 className="quiz-title">Leaderboard</h1>
                <div className="leaderboard-list">
                    {leaderboard.map((entry, index) => (
                        <div key={entry.id} className="leaderboard-entry">
                            <span>{index + 1}. {entry.email}</span>
                            <span>{entry.score} points</span>
                        </div>
                    ))}
                </div>
                <button className="back-button" onClick={() => setShowLeaderboard(false)}>
                    Back to Quiz
                </button>
            </div>
        );
    }

    if (gameOver) {
        return (
            <div className="quiz-container">
                <h1 className="quiz-title">Quiz Complete!</h1>
                <p className="final-score">Your Score: {score} / {questions.length}</p>
                <div className="button-container">
                    <button className="leaderboard-button" onClick={fetchLeaderboard}>
                        View Leaderboard
                    </button>
                    <button className="restart-button" onClick={restartGame}>
                        Play Again
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="quiz-container">
            <div className="quiz-header">
                <h1 className="quiz-title">Space Quiz</h1>
                <div className="header-buttons">
                    <p className="score">Score: {score} / {questions.length}</p>
                    <button className="leaderboard-button" onClick={fetchLeaderboard}>
                        Leaderboard
                    </button>
                </div>
            </div>

            <div className="question-container">
                <p className="question-text">{questions[currentQuestion].question}</p>
                <div className="options-container">
                    {questions[currentQuestion].options.map((option, index) => (
                        <button
                            key={index}
                            className={`option-button ${
                                showFeedback
                                    ? index === questions[currentQuestion].correct
                                        ? "correct"
                                        : selectedAnswer === index
                                            ? "incorrect"
                                            : ""
                                    : ""
                            }`}
                            onClick={() => !showFeedback && handleAnswer(index)}
                            disabled={showFeedback}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            </div>

            {showFeedback && (
                <>
                    <div className="explanation">
                        <p>{questions[currentQuestion].explanation}</p>
                    </div>
                    <button className="next-button" onClick={handleNext}>
                        {currentQuestion + 1 < questions.length ? "Next Question" : "Finish Quiz"}
                    </button>
                </>
            )}
        </div>
    );
};

export default SpaceQuiz;
