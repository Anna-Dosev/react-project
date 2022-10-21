import { useState } from 'react';

const Words = () => {
  const [word, setWord] = useState();

  const getWords = async() => {

    const apiUrl= 'https://english-random-word.p.rapidapi.com/random_words/1'      
    const apiData = await fetch(apiUrl, {
      method: 'GET',
      headers: {
        "Content-Type" : "application/json",
        "X-RapidAPI-Key" : "5a61fdea5cmsh897482afa700670p1c35bajsnf5b82c3a86de",
        "X-RapidAPI-Host" : "english-random-word.p.rapidapi.com"
      }
    })
    const jsonData = await apiData.json();
    setWord(jsonData[0])
  } 
      return (
        <div>
          <div className="home-btn-container">
              <button onClick={getWords} className="word-btn"> Word of the Day </button>
          </div>
          {word && (
            <div>
             <p className="word-text">{word.word}</p>
             <p className="meaning-text">{word.meaning}</p>
             <p className="usage-text">"{word.example_1}"</p>
           </div>
          )} 
        </div>
      )
  };
  
  export default Words;