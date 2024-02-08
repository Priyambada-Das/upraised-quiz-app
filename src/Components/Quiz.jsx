import React, { useRef, useState } from 'react'
import './quiz.css';
import { data } from '../assets/data';
import Result from './Result';

const Quiz = () => {

  let [index, setIndex] = useState(0);
  let [question, setQuestion] = useState(data[index]);
  let [lock, setLock] = useState(false);
  let [score, setScore] = useState(0);
  let [result, setResult] = useState(false);
  let [incorrectScore, setIncorrectScore] = useState(0);
  let [error, setError] = useState('');

  // referance variables
  let Option1 = useRef(null);
  let Option2 = useRef(null);
  let Option3 = useRef(null);
  let Option4 = useRef(null);

  let option_array = [Option1, Option2, Option3, Option4];

  // Function for select the option
  const checkAns = (e, ans) => {
    // if the lock is false then only we can select a option after that we can not select because we set the setLock state true.
    if (lock === false) {
      if (question.ans === ans) {
        e.target.classList.add("correct");
        setLock(true);
        setScore(prev => prev + 1);
      } else {
        e.target.classList.add("wrong");
        setLock(true);
        option_array[question.ans - 1].current.classList.add("correct");
        setIncorrectScore(prev => prev + 1);
      }
    }
  }

  const next = () => {
    if (lock === true) {
      // if we reach in the last question then result state will be true so that we can show the result page
      if (index === data.length - 1) {
        setResult(true);
        return 0;
      }
      setIndex(++index);
      setQuestion(data[index]);
      setLock(false);
      setError('');
      // need to remove the class otherwise it will automatically added when we click next button
      option_array.map((option) => {
        option.current.classList.remove("wrong");
        option.current.classList.remove("correct");
        return null;
      })
    } else {
      setError('Please select an option before proceeding to the next question.');
    }
  }

  return (
    <>
      {result ? <Result score={score} incorrectScore={incorrectScore} /> : <div className="quiz-container">
        <div className="quiz-details">
          <div className="question-number"><span className="question-number-first">{index + 1}</span>/{data.length}</div>
          <div className="question">Question {index + 1}: {question.question}</div>
          <div className="error-message">{error}</div>
          <div className="options">
            <div ref={Option1} onClick={(e) => { checkAns(e, 1) }} className="option">{question.option1}</div>
            <div ref={Option2} onClick={(e) => { checkAns(e, 2) }} className="option">{question.option2}</div>
            <div ref={Option3} onClick={(e) => { checkAns(e, 3) }} className="option">{question.option3}</div>
            <div ref={Option4} onClick={(e) => { checkAns(e, 4) }} className="option">{question.option4}</div>
          </div>
          <button onClick={next} className="next-button">Next</button>
        </div>
      </div>}
    </>
  )
}

export default Quiz
