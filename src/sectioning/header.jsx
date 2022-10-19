import { NavLink } from 'react-router-dom';

const Nav = ({ data, setIsLoggedIn }) => {
  const handleLogOut = (e) => {
    setIsLoggedIn(false);
  };
    const navItems = data.map((navItem) => {
      if (navItem.onLoggedOut == true) {
        return (
            <NavLink id="navbar" to={navItem.href} key={navItem.id}>{navItem.text}</NavLink>
          )
      } else if (!setIsLoggedIn) {
        return (
          <NavLink id="navbar" to={navItem.href} key={navItem.id}>{navItem.text}</NavLink>
        )
      }
    });
    return (
      <div>
        {navItems}
      </div>
    );
  };
  
  export default Nav;
  