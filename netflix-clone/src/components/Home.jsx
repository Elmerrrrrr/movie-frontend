import React from "react";
import { NavLink, withRouter } from 'react-router-dom';
import '../css/Homepage.css';

function Home() {
  return (
    <div className="home">
      <h3 style={{textAlign: 'center', marginTop: '1rem'}}>Kacem and Mari are going to make a nice navigation bar and a footer. Good luck!</h3>

      <NavLink to="/">Back to awesome webpage</NavLink>
    </div>
  );
}

export default withRouter(Home);