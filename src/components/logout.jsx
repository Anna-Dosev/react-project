const Logout = ({ setIsLoggedIn }) => {
    const handleLogOut = (e) => {
      setIsLoggedIn(false);
    };
    return (
      <div className="login-container">
        <h3>Nicely done!</h3>
        <form onSubmit={handleLogOut}>
          <button type="submit" className="login-button">
            Logout
          </button>
        </form>
      </div>
    );
  };
  
  export default Logout;
  