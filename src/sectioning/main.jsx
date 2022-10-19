import { Routes, Route } from 'react-router-dom';
import { Home, Practice, Profile, Logout } from '../views';

const Main = (setIsLoggedIn) => {
    const handleLogOut = (e) => {
        setIsLoggedIn(false);
      };
  return (
    <main className="y-wrap">
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/logout" element={<Logout />} type="submit" onSubmit={handleLogOut}/>
      </Routes>
    </main>
  );
};

export default Main;