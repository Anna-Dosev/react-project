import React, { useState} from 'react';
import Quiz1 from '../components/quiz1';
import image1 from '../mocks/assets/image1.jpg'
import image3 from '../mocks/assets/image3.jpg'
import { useDispatch, useSelector } from 'react-redux';
import {addQuestions} from '../features/generic/genericSlice';
import '../mocks/assets/practiceStyles.css'


const Practice = () => {
const dispatch = useDispatch();
const displayQuestions = useSelector(state => state.questions.questions);

const [level, setLevel] = useState('1');
const [area, setArea] = useState('sat');

const handleValue = (e) => setLevel(e.target.value);
const handleArea = (e) => setArea(e.target.value);

const getWordQuiz = async() => {

  
  console.log(level)
  const apiUrl = `https://twinword-word-association-quiz.p.rapidapi.com/type1/?level=${level}&${area}`
  
  const apiData = await fetch(apiUrl, {
    method: 'GET',
    headers: {
      "Content-Type" : "application/json",
      "X-RapidAPI-Key" : "5a61fdea5cmsh897482afa700670p1c35bajsnf5b82c3a86de",
      "X-RapidAPI-Host" : "twinword-word-association-quiz.p.rapidapi.com"
    }
  })
  const jsonData = await apiData.json()
  const quizResults = jsonData.quizlist

  dispatch(addQuestions(quizResults))

  // let resultsToDisplay = quizResults.quiz

}
  return (
      <div>
        <div className="practice-top-half">
          <div className="practice-screen">
            <div className="practice-text-container">
              <div className="instructions-text-container"> 
                  <h1>Let's Get Started!</h1>
                  <p>Filter your desired test type and difficulty level with the options below.</p>
                <div className="test-container">
                  <label>Type</label>
                  <select onChange={handleArea} className="test-field">
                    <option value="sat">SAT</option>
                    <option value="gre">GRE</option>
                    <option value="gmat">GMAT</option>
                  </select>
                  <label>Level</label>
                  <select onChange={handleValue} className="test-field">
                    <option id="level" value="1">1</option>
                    <option id="level" value="2">2</option>
                    <option id="level" value="3">3</option>
                    <option id="level" value="4">4</option>
                    <option id="level" value="5">5</option>
                    <option id="level" value="6">6</option>
                    <option id="level" value="7">7</option>
                    <option id="level" value="8">8</option>
                    <option id="level" value="9">9</option>
                    <option id="level" value="10">10</option>
                  </select>
                </div>
            </div>
            <div className="instructions">
              <h3>Instructions:</h3>
              <p> Chooose which word in column 2 is best associated with the words in column 1.</p>
            </div> 
            <button onClick={getWordQuiz} className="practiceBtn">Begin New Quiz</button>
            </div>
          </div>
          <div>
            <img className="practice-image" src={image1}/>
          </div>
        </div>
        <div className="grid-container">
          <Quiz1/>
        </div>
        <footer>
          <img className="home-image" src={image3}/>
        </footer>
      </div>

  );
};

export default Practice;