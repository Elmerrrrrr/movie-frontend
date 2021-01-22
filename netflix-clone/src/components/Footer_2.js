import React, { Component } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import { Icon } from "react-icons-kit";
import { iosWorld } from "react-icons-kit/ionicons/iosWorld";
import { arrowSortedDown } from "react-icons-kit/typicons/arrowSortedDown";
import { generateMedia } from "styled-media-query";
import image1 from "../svg/image1.svg";
import image2 from "../svg/image2.svg";
import image3 from "../svg/image3.svg";
import image5 from "../svg/image5.svg";
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
      <FooterContainer>
        <div className="footer-container">
          <div className="social-iconContainer">
            <div>
              <a
                href="https://www.facebook.com/NetflixNederland"
                target="_blank"
              >
                <img className="footer-Image" src={image1} alt="logo" />
              </a>
            </div>
            <div>
              <img className="footer-Image" src={image2} alt="logo" />
            </div>
            <div>
              <img className="footer-Image" src={image3} alt="logo" />
            </div>
            <div>
              <img className="footer-Image" src={image5} alt="logo" />
            </div>
          </div>

          <div className="footer-columns">
            <ul>
              <li>
                <Link>FAQ</Link>
              </li>
              <li>
                <Link>Investor Relations</Link>
              </li>
              <li>
                <Link>Ways to Watch</Link>
              </li>
              <li>
                <Link>Corporate Information</Link>
              </li>
              <li>
                <Link>Netflix Originals</Link>
              </li>
            </ul>
            {/* second column */}
            <ul>
              <li>
                <Link>Help Center</Link>
              </li>
              <li>
                <Link>Jobs</Link>
              </li>
              <li>
                <Link>Terms of Use</Link>
              </li>
              <li>
                <Link>Contact Us</Link>
              </li>
            </ul>
            {/* third column */}
            <ul>
              <li>
                <Link>Account</Link>
              </li>
              <li>
                <Link>Redeem Gift Cards</Link>
              </li>
              <li>
                <Link>Privacy</Link>
              </li>
              <li>
                <Link>Speed Test</Link>
              </li>
            </ul>
            {/* fourth column */}
            <ul>
              <li>
                <Link>Media Center</Link>
              </li>
              <li>
                <Link>Buy Gift Cards</Link>
              </li>
              <li>
                <Link>Cookie Preferences</Link>
              </li>
              <li>
                <Link>Legal Notice</Link>
              </li>
            </ul>

            {/* Language Button */}
            <div className="lang-btn" onClick={this.handleToggle}>
              &nbsp;&nbsp;Servicecode&nbsp;&nbsp;
            </div>
          </div>

          {/* // Toggle Language Content */}
          {this.state.langContent && <div className="lang-toggle"></div>}

          <div className="copyRight">
            © 1997-2021 Netflix, Inc. i-00e1c8ce93b4638ae
          </div>
        </div>
      </FooterContainer>
    );
  }
}

export default Footer;

// Media
const customMedia = generateMedia({
  tablet: "800px",
  mdDesktop: "1000px",
});

const FooterContainer = styled.footer`
  background: var(--main-deep-dark);
  padding-top: 10rem;
  padding-bottom: 3rem;
  color: #999;

  .footer-container {
    max-width: 980px;
    margin: 20px auto 0;
    padding: 0 4%;
  }

  .questions {
    margin: 2rem 2.4rem 2rem;
  }

  .footer-columns {
    font-size: 0.9rem;
    overflow: auto;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    ${customMedia.lessThan("tablet")`
        grid-template-columns: repeat(2, 1fr);
        `}
  }

  ul li {
    list-style: none;
    line-height: 2.5;
  }

  a {
    color: #999;
  }

  a:hover {
    text-decoration: underline;
    cursor: pointer;
  }

  // Language Button
  .lang-btn {
    backgrond: transparent;
    border: 0.9px solid #333;
    padding: 1rem;
    width: 8rem;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    margin: 2rem 2.2rem 2rem;
    cursor: pointer;
    position: relative;
  }

  // Toggle Language Content
  .lang-toggle {
    margin-left: 2.2rem;
    position: absolute;
    margin-top: -2rem;
  }
  .lang-toggle ul {
    background: var(--main-deep-dark);
    width: 8.125rem;
    border: 1px solid #333;
    &:hover {
      background: #0085ff;
      color: #fff;
    }
  }
`;
