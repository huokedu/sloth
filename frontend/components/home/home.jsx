import React from 'react';
import { Link } from 'react-router';

const Home = ({ children, currentUser, location }) => {
  let button;
  let background;

  if (currentUser.id) {
    button = <Link className="nav-button" to="/messages">Signed in as {currentUser.username}</Link>;
  } else {
    button = <Link className="nav-button" to="/signin">Sign in</Link>;
  }

  if (location.pathname === '/') {
    background = 'home-cover';
  } else {
    background = 'home-form';
  }

  return (
    <div className={"home " + background}>
      <nav className="group">
        <h1 className="logo"><Link to="/">// sloth</Link></h1>
        {button}
      </nav>
      {children || <div className="tagline"><h2>A messaging app for teams</h2><h2>who eat leaves all day!!</h2></div>}
    </div>
  );
};

export default Home;
