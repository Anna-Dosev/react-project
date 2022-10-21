import React from 'react';
import Words from '../components/words'
import Universities from '../components/universities'
import '../mocks/assets/homeStyles.css'

const Home = () => {

  return (
    <div>
        <div className="home-screen">
          <div className="home-text-container">
            <div> 
              <h1>Welcome to CampusQ's</h1>
              <p>Preparing for college is a daunting task. The to-do lists quickly become overwhelming without a game plan in place. 
                 Campus Q's is here to help you stay organized in all aspects of your quest for higher knowledge.</p>
              <p className="bold-text">Prepping for the SAT? <br></br>Expand your vocabulary!</p>
            </div>
            <div className="words-container">
              <Words/>
            </div>
          </div>
          <Universities/>
        </div>
        <footer>
          <img className="home-image" src="https://as2.ftcdn.net/v2/jpg/02/87/59/67/1000_F_287596718_0Y53hkbfo5wTYUg31Ogdqs93YRA1QDpG.jpg"/>
        </footer>
      </div>
  );
};

export default Home;



