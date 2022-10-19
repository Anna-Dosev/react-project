
//ALL INFO IS STILL FOR WORD QUIX. NEED TO UPDATE

const Quiz2 = () => {
    //const displayQuestions = useSelector(state => state.questions.questions);

    const mathQuestion = displayQuestions.map((quiz, index) => {
        return(
        <div className="main-question-container">
          <div className="question-container" key={index}>
            {quiz.quiz.map((option, index) => {
            return(<p className="question-text" key={index}>{option}</p>)
            })
            }
          </div>
          <div className="answers-container">
            {quiz.option.map((option, index) => {
            return( <button className="option-text" key={index}>{option}</button>)
            })
            }
          </div>
        </div>
        );
      });
    
      return (
        <div>
          {mathQuestoin}
        </div>
      )
  };
  
  export default Quiz2;