import {useState} from 'react';

const Login = ({ handleSubmit }) => {
    const [field, setField] = useState('');
    const [field2, setField2] = useState('');
  
    const handleChange = (e) => {
      const inputVal = e.target.value;
      setField(inputVal);
    };
  
    const handleChange2 = (e) => {
      const inputVal = e.target.value;
      setField2(inputVal);
    };
  
    return (
      <div>
        <div className="login-screen">
          <div className="main-text-container">
            <div className="intro-text"> 
              <h1>Welcome to CampusQ's</h1>
              <p>College comes faster than you think. A little prep a day can go a long way.</p>
            </div>
            <form
              className="login-container"
              onSubmit={(e) => handleSubmit(e, field, field2)}
            >
              <h3>Please log in to continue</h3>
              <div className="input-container">
                <input
                  value={field}
                  onChange={handleChange}
                  type="text"
                  placeholder="NAME"
                ></input>
                <input
                  value={field2}
                  onChange={handleChange2}
                  type="password"
                  placeholder="PASSWORD"
                ></input>
              </div>
              <button type="submit" className="login-button">
                Login
              </button>
            </form>
          </div>
          <img className="login-image" src="https://as2.ftcdn.net/v2/jpg/02/99/06/99/1000_F_299069957_9FfNrl3vi6yDSnvEgL6xXRVSYVb0PKkO.jpg" alt="books"/>
        </div>
      </div>
    );
  };
  
  export default Login;