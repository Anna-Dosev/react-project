import React from 'react';
import Universities from '../components/universities'
import { useDispatch, useSelector } from 'react-redux';
// import Generic from '../redux/generic.jsx'
import '../mocks/assets/homeStyles.css'

const Home = () => {



    const dispatch = useDispatch();
    const displayQuestions = useSelector(state => state.questions.questions);
    
    const getMathQuestion = async() => {

      const apiUrl = `https://random-math-problem.p.rapidapi.com/random-problem`
      
      const apiData = await fetch(apiUrl, {
        method: 'GET',
        headers: {
          "Content-Type" : "application/json",
          "X-RapidAPI-Key" : "5a61fdea5cmsh897482afa700670p1c35bajsnf5b82c3a86de",
          "X-RapidAPI-Host" : "random-math-problem.p.rapidapi.com"
        }
      })
      const jsonData = await apiData.json()
      const quizResults = jsonData.quizlist
    
      // dispatch(mathQuestions(quizResults))
    }

    const click1 = () => {
      console.log(getMathQuestion)
    };



  return (
    <div>
      {/* <Generic/> */}
        <div className="home-screen">
          <div className="home-text-container">
            <div> 
              <h1>Welcome to CampusQ's</h1>
              <p>Preparing for college is a daunting task. The to-do lists quickly become overwhelming without a game plan in place. 
                 Campus Q's is here to help you stay organized in all aspects of your quest for higher knowledge.</p>
              <p className="benchmark">Benchmark your knowledge!</p>
            </div>
            <div className="home-btn-container">
              <button onClick={click1} className="home-btns"> Generate Random Math Question </button>
            </div>
            <div>
              {/* <Quiz2/> */}
            </div>
          </div>
          <div className="sample-text">
            <Universities/>
          </div>
        </div>
        <footer>
          <img className="home-image" src="https://as2.ftcdn.net/v2/jpg/02/87/59/67/1000_F_287596718_0Y53hkbfo5wTYUg31Ogdqs93YRA1QDpG.jpg"/>
        </footer>
      </div>
  );
};

export default Home;



