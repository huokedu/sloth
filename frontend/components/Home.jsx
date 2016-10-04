import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router';

function Home({ children, currentUser }) {
  let button;

  if (currentUser.id) {
    button = <Link to='/channels'>Signed in as {currentUser.username}</Link>;
  } else {
    button = <Link to='/signin'>Sign in</Link>;
  }

  return (
    <div>
      <h1><Link to="/">sloth</Link></h1>
      {button}
      {children || <h2 className="tagline">An messaging app for teams who eat leaves all day.</h2>}
    </div>
  );
}

const mapStateToProps = ({ currentUser }) => ({ currentUser });

export default connect(
  mapStateToProps
)(Home);
