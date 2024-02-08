import React from 'react'
import './quiz.css'
import { data } from '../assets/data'
import './result.css';
import { useNavigate } from 'react-router-dom';

const Result = ({ score, incorrectScore }) => {
    const navigate = useNavigate();

    const handleStartAgain = () => {
        navigate('/');
    };

    return (
        <div className="result-container">
            <div className="result-details">
                <h2>Quiz Result</h2>
                <hr />
                <p className="result-paragraph">Correct Score: {score}</p>
                <p>Incorrect score: {incorrectScore}</p>
                <p>Total Question: {data.length}</p>
                <button onClick={handleStartAgain} className="restart-button">Start Again</button>
            </div>
        </div>
    )
}

export default Result
