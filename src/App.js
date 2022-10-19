import React, { useState } from 'react';
import data from './mocks/loginData.json';
import Login from './components/login';
// import Logout from './components/logout';
import Message from './components/loginMessage';
import Nav from './sectioning/header'
// import Nav from './components/nav';
import Main from './sectioning/main'
import './style.css';

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [message, setMessage] = useState(false);
  const [nav, setNav] = useState(false);

  const handleLogIn = (e, name, password) => {
    e.preventDefault();
    if (name == '' || password == '') {
      setMessage(true);
      console.log('need more info')
    } else {
      setIsLoggedIn(true);
    }
  };


  if (!isLoggedIn) {
    return (
      <div>
        <Login handleSubmit={handleLogIn} />
        {message && <Message />}
      </div>
    );
  } else {
    return (
      <div>
        <Nav data={data} />
        <Main setIsLoggedIn={setIsLoggedIn}/>
        {/* <Logout setIsLoggedIn={setIsLoggedIn} /> */}
      </div>
    );
  }
}

{/* <form onSubmit={handleLogOut}>
  <button type="submit" className="login-button">
    Logout
  </button>
</form> */}