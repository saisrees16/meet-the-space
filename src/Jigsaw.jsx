import React, { useState, useEffect } from "react";
import { DndProvider, useDrag, useDrop } from "react-dnd";
import { HTML5Backend } from "react-dnd-html5-backend";
import "./jig.css";

const IMAGE_URLS = [
    "https://images.pexels.com/photos/41953/earth-blue-planet-globe-planet-41953.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.unsplash.com/photo-1543722530-d2c3201371e7?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D",
    "https://plus.unsplash.com/premium_photo-1717620945061-fdb31301a205?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MXx8c29sYXIlMjBzeXN0ZW18ZW58MHx8MHx8fDA%3D"
];

const GRID_SIZE = 4;
const PIECE_WIDTH = 150;
const PIECE_HEIGHT = 100;

const PuzzlePiece = ({ piece, movePiece, isCorrect, imageUrl }) => {
    const [{ isDragging }, drag] = useDrag(() => ({
        type: "piece",
        item: { id: piece.id },
        collect: (monitor) => ({
            isDragging: !!monitor.isDragging(),
        }),
    }));

    const [, drop] = useDrop(() => ({
        accept: "piece",
        drop: (item) => movePiece(item.id, piece.id),
    }));

    return (
        <div
            ref={(node) => drag(drop(node))}
            className={`puzzle-piece ${isDragging ? "dragging" : ""} ${isCorrect ? "correct" : ""}`}
            style={{
                width: PIECE_WIDTH,
                height: PIECE_HEIGHT,
                backgroundImage: `url(${imageUrl})`,
                backgroundPosition: `-${piece.col * PIECE_WIDTH}px -${piece.row * PIECE_HEIGHT}px`,
                backgroundSize: `${GRID_SIZE * PIECE_WIDTH}px ${GRID_SIZE * PIECE_HEIGHT}px`,
            }}
        />
    );
};

const Jigsaw = () => {
    const [pieces, setPieces] = useState([]);
    const [imageIndex, setImageIndex] = useState(0);
    const [isComplete, setIsComplete] = useState(false);

    useEffect(() => {
        generatePuzzle();
        setIsComplete(false); // Reset completion status when changing the image
    }, [imageIndex]);

    const generatePuzzle = () => {
        const newPieces = [];
        for (let row = 0; row < GRID_SIZE; row++) {
            for (let col = 0; col < GRID_SIZE; col++) {
                newPieces.push({
                    id: row * GRID_SIZE + col,
                    row,
                    col,
                    currentIndex: row * GRID_SIZE + col,
                });
            }
        }
        setPieces(shuffleArray(newPieces));
    };

    const shuffleArray = (arr) => arr.map(value => ({ ...value })).sort(() => Math.random() - 0.5);

    const movePiece = (fromId, toId) => {
        setPieces((prev) => {
            const newPieces = [...prev];
            const fromIndex = newPieces.findIndex((p) => p.id === fromId);
            const toIndex = newPieces.findIndex((p) => p.id === toId);

            if (fromIndex !== -1 && toIndex !== -1) {
                [newPieces[fromIndex], newPieces[toIndex]] = [newPieces[toIndex], newPieces[fromIndex]];
            }

            return newPieces;
        });

        checkCompletion();
    };

    const checkCompletion = () => {
        const completed = pieces.every((piece) => piece.id === piece.currentIndex);
        setIsComplete(completed);
    };

    const nextImage = () => {
        setImageIndex((prev) => (prev + 1) % IMAGE_URLS.length);
    };

    return (
        <DndProvider backend={HTML5Backend}>
            <div className="game-wrapper">
                <div className="puzzle-section">
                    <div className="puzzle-container">
                        {pieces.map((piece) => (
                            <PuzzlePiece
                                key={piece.id}
                                piece={piece}
                                movePiece={movePiece}
                                isCorrect={piece.id === piece.currentIndex}
                                imageUrl={IMAGE_URLS[imageIndex]}
                            />
                        ))}
                    </div>
                    {isComplete && (
                        <div className="completion-message">
                            🎉 Puzzle Completed! 🎉
                            <button onClick={nextImage}>Next Image</button>
                        </div>
                    )}
                </div>
                <div className="reference-image">
                    <img src={IMAGE_URLS[imageIndex]} alt="Reference" />
                </div>
            </div>
        </DndProvider>
    );
};

export default Jigsaw;
