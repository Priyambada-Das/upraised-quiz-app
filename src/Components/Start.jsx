import React from 'react'
import './start.css';
import { useState } from 'react';
import Quiz from './Quiz';

const Start = () => {
    const [showQuiz, setShowQuiz] = useState(false);

    const handleStartClick = () => {
        setShowQuiz(true);
    }
    return (
        <>
            {showQuiz ? (
                <Quiz />
            ) : (
                <div className="start-container">
                    <h1>upraised</h1>
                    <div className="quiz-circle">
                        <h3>Quiz</h3>
                    </div>
                    <button onClick={handleStartClick}>Start</button>
                </div>
            )}

        </>
    )
}

export default Start
