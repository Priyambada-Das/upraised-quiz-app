import React from 'react'
import './start.css';
import { Link } from 'react-router-dom';

const Start = () => {

    return (
        <>
            <div className="start-container">
                <h1>upraised</h1>
                <div className="quiz-circle">
                    <h3>Quiz</h3>
                </div>
                <div className='start-btn'>
                    <Link to="/quiz"><button>Start</button></Link>
                </div>
            </div>
        </>
    )
}

export default Start
