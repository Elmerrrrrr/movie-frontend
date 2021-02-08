import React, { Component } from "react";
import facebook from "../images/FBMRI.png";
import instagram from "../images/INSTMRI.png";
import twitter from "../images/TWITMRI.png";
import youtube from "../images/YTMRI.png";
import "../css/Footer_2.css";

class Footer extends Component {
  state = {
    langContent: false,
  };

  handleToggle = (e) => {
    e.preventDefault();
    this.setState({
      langContent: !this.state.langContent,
    });
  };

  render() {
    return (
      
      <div className="footer2">
        <div className="social_links">
          <a href="https://www.facebook.com/NetflixNederland" target="_blank"rel="noreferrer"><img src={facebook} alt="FB"/></a>
          <a href="instagram.com/NetflixNL/" target="_blank"rel="noreferrer"><img src={instagram} alt="INST"/></a>
          <a href="https://twitter.com/NetflixNL" target="_blank"rel="noreferrer"><img src={twitter} alt="TWIT"/></a>
          <a href="https://www.youtube.com/user/netflixbenelux" target="_blank"rel="noreferrer"><img src={youtube} alt="YT"/></a>
        </div>
         

        <div className="textblock_container">

         <div className="footer-container">    
         


          <div className="textblock">
            <a href="ok">Audio and Subtitles</a>
            <a href="ok">Help Centre</a>
            <a href="ok">Media Centre</a>
            <a href="ok">Privacy</a>
            <a href="ok">Contact Us</a>
          </div>

          <div className="textblock">
            <a href="ok">Audio Description</a>
            <a href="ok">Investor Relations</a>
            <a href="ok">Legal Notices</a>
          </div>

          <div className="textblock">
            <a href="ok">Help Centre</a>
            <a href="ok">Jobs</a>
            <a href="ok">Cookie Preferences</a>
          </div>

          <div className="textblock">
            <a href="ok">Gift Cards</a>
            <a href="ok">Terms of use</a>
            <a href="ok">Corporate Information</a>
          </div>
        </div>
        <button className="service_Btn">Service Code</button>
        <div className="Copyright">&#169; 1997-2021 Netflix, Inc.</div>

        </div>
      </div>
    );
  }
}

export default Footer;
