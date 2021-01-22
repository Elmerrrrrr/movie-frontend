import React, { useState, useEffect } from "react";
import "./css/Nav.css";
import gift from "./images/Marigifts.png";
import bell from "./images/Maribells.png";

function Nav() {
  const [show, handleShow] = useState(false);
  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        handleShow(true);
      } else handleShow(false);
    });

    return () => {
      window.removeEventListener("scroll", Nav);
    };
  }, []);

  return (
    <div className={`nav ${show && "nav_darken"}`}>
      <div className="nav_logoPos">
        <img
          className="nav_logo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
      </div>

      <div className="nav_left">
        <ul>
          <li>Home</li>
          <li>Series</li>
          <li>Films</li>
          <li>New &#38; Popular</li>

          <li className="browse">
            Browse
            <div className="browseContent">
              <a href="j">Home</a>
              <a href="j">Series</a>
              <a href="j">Films</a>
              <a href="j">New &#38; Popular</a>
            </div>
          </li>
        </ul>
      </div>

      <div className="nav_right">
        <ul>
          <li>
            <form action="" type="GET">
              <input
                type="search"
                name="q"
                placeholder="Titles, people, genres"
              ></input>
            </form>
          </li>
          <li>CHILDREN</li>
          <li>
            <img src={gift} alt="Gift" />
          </li>
          <li>
            <img src={bell} alt="Bell" />
          </li>
          <li>
            <div className="dropdownAccount">
              <div>
                <img
                  className="account"
                  src="https://pbs.twimg.com/profile_images/1165907170178695168/JLkRF8ZY_400x400.png"
                  /* src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" */
                  alt="Netflix avatar"
                />
                <div class="triangleDown"></div>
              </div>
              <div className="dropdownMenu">
                <div class="triangleUp"></div>
                <div className="dropdownAccountContent">
                  <a href="j">K</a>
                  <a href="j">Children</a>
                  <a href="j">Manage Profiles</a>
                  <div>
                    <a href="j">Account</a>
                    <a href="j">Help Centre</a>
                    <a href="j">Sign out of NetFlix</a>
                  </div>
                </div>
              </div>
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
}

export default Nav;
