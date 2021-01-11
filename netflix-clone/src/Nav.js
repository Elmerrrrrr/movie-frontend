import React, { useState, useEffect } from "react";
import "./Nav.css";
import search from './images/Marisearch.png';
import gift from './images/Marigifts.png';
import bell from './images/Maribells.png';


function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    // return () => {
    //   window.removeEventListener("scroll");
    // };
  }, []);

  return (
    <div className={`nav ${show && "nav_darken"}`}>
      <img
        className="nav_logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <ul>
        <li>Home</li>
        <li>Series</li>
        <li>Films</li>
        <li>New &#38; Popular</li>
        <li>My list</li>
      </ul>

      <div className="nav_icons">
        <ul>
          <li>
            <img src={search} alt="search" />
          </li>
          <li>
            <img src={gift} alt="Gift" />
          </li>
          <li>
            <img src={bell} alt="Bell" />
          </li>
        </ul>
      </div>

      <img
        className="nav_avatar"
        src="https://pbs.twimg.com/profile_images/1165907170178695168/JLkRF8ZY_400x400.png"
        alt="Netflix avatar"
      />
    </div>
  );
}

export default Nav;
