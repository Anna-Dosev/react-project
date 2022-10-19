import { useDispatch, useSelector } from 'react-redux';
import '../mocks/assets/practiceStyles.css'


const Quiz1 = () => {
    const displayQuestions = useSelector(state => state.questions.questions);

    const quizResult = displayQuestions.map((quiz, index) => {
        return(
        <div className="main-question-container" key={index}>
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
          {quizResult}
        </div>
      )
  };
  
  export default Quiz1;