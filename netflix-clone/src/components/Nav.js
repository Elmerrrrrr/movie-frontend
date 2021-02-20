import React, { useState, useEffect } from "react";
import { useLocation } from "react-router-dom";
import "../css/Nav.css";
import gift from "../images/Marigifts.png";
import bell from "../images/Maribells.png";
import SearchBar from "./SearchBar";

function Nav() {
  const location = useLocation();
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
      <img
        className="Netflix_Logo"
        src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
        alt="Netflix Logo"
      />
      <ul className="primary-navigation">
        <li className="navigation-menu">
          <div className="menu-trigger" href="_Blank">
            Browse
            <div className="caretPos1">
              <div className="triangleDown" href="_Blank"></div>
            </div>
            <div className="browseContent">
              <div className="triangleUpPos">
                <div className="triangleUp"></div>
              </div>
              <div className="collapsePrimary">
                <a href="/home">Home</a>
                <a href="/films">Discover</a>
                <a href="/search">Search</a>
              </div>
            </div>
          </div>
        </li>
        <li className="navigation-tab">
          <a
            className={location.pathname === "/home" ? "active" : ""}
            href="/home"
          >
            Home
          </a>
        </li>
        <li className="navigation-tab">
          <a href="/home">Discover</a>
        </li>
        <li className="navigation-tab">
          <a
            className={location.pathname === "/films" ? "active" : ""}
            href="/films"
          >
            Films
          </a>
        </li>
      </ul>
      <div className="second-navigation">
        <div className="nav-element">
          <form action="search" type="GET">
            <input
              type="search"
              name="find"
              placeholder="Titles, people, genres"
            ></input>
          </form>
        </div>

        <div className="nav-element">
          <a className="children" href="_Blank">
            CHILDREN
          </a>
        </div>
        <div className="nav-element">
          <img className="navImg" src={gift} alt="Gift" />
        </div>
        <div className="nav-element">
          <img className="navImg" src={bell} alt="Bell" />
        </div>
        <div className="nav-element">
          <div className="account-menu-item">
            <img
              className="account"
              src="https://pbs.twimg.com/profile_images/1165907170178695168/JLkRF8ZY_400x400.png"
              /* src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" */
              alt="Netflix avatar"
            />
            <div className="caretPos2">
              <div className="triangleDown"></div>
            </div>
            <div className="account-dropdown-button">
              <div className="triangleUp"></div>
              <div className="dropdownAccountContent">
                <a href="_Blank">You</a>
                <a href="_Blank">Children</a>
                <a href="_Blank">Manage Profiles</a>
                <div>
                  <a href="_Blank">Account</a>
                  <a href="_Blank">Help Centre</a>
                  <a href="_Blank">Sign out of NetFlix</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Nav;
