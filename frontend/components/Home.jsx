import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function Home({ children, currentUser }) {
  let button;

  if (currentUser.id) {
    button = <Link className="nav-button" to="/channels">Signed in as {currentUser.username}</Link>;
  } else {
    button = <Link className="nav-button" to="/signin">Sign in</Link>;
  }

  return (
    <div>
      <nav className="group">
        <h1 className="logo"><Link to="/">sloth</Link></h1>
        {button}
      </nav>
      {children || <div className="tagline"><h2>A messaging app for teams</h2><h2>who eat leaves all day!!</h2></div>}
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(
  mapStateToProps
)(Home);
