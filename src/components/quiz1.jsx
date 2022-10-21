import { useDispatch, useSelector } from 'react-redux';
import Answer from './answer'
import { useState } from 'react';
import '../mocks/assets/practiceStyles.css'


const Quiz1 = () => {
    const displayQuestions = useSelector(state => state.questions.questions);

    const quizResult = displayQuestions.map((quiz, index) => {
      console.log('correct answer', quiz.option[quiz.correct-1])
        return(
          <div className="main-question-container" key={index}>
            <div className="question-container" key={index}>
              {quiz.quiz.map((option, index) => {
              return(<p className="question-text" key={index}>{option}</p>)
              })
              }
            </div>
            <Answer quiz={quiz} correctAnswer={quiz.option[quiz.correct-1]}/>
          </div>
        );
      });
    
      return (
        <>
          {quizResult}
        </>
      )
  };
  
  export default Quiz1;