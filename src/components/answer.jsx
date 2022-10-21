import DisplayCorrect from './displayCorrect';
import DisplayTryAgain from './displayTryAgain';
import { useState } from 'react';
import '../mocks/assets/practiceStyles.css'
import React from "react";

const Answer = ({correctAnswer, quiz}) => {
    const [answer, setAnswer] = useState();
    const handleClick = (e) => {
        const _selectedAnswer = e.target.dataset.option;
        if (_selectedAnswer === correctAnswer) {
            setAnswer(true)
        } else if (_selectedAnswer !== correctAnswer) {
            setAnswer(false)
        }
    }

    return (
      <div className="answers-container">
        {quiz.option.map((option, index) => {
        return (<button data-option={option} onClick={handleClick} className="option-text" key={index}>{option}</button>)
        })
        }
        <div> 
          {answer && <DisplayCorrect/>}
          {answer===false && <DisplayTryAgain/>}
        </div>
      </div>
    )
}

export default Answer; 