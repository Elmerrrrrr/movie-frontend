import React from "react";
import { Button } from "./Button";
import styled from "styled-components";
import ImgTv from "../images/tab-tv.png";
import ImgTablet from "../images/tab-tablet.png";
import ImgPc from "../images/tab-macbook.png";
import { generateMedia } from "styled-media-query";

function TabContentTwo() {
  return (
    <TabContainer>
      <div className="tab-content">
        {/* Tab Top Content */}
        <div className="tab-top-content">
          <span style={{ fontSize: "1.5rem" }}>
            Watch TV shows and movies anytime, anywhere - personalized for you.
          </span>
          <Button className="btn">try it now</Button>
        </div>
      </div>

      {/* // Tab Bottom Content */}
      <div className="tab-bottom-content-img">
        {/* // TV container */}
        <div>
          <img src={ImgTv} alt="first" style={{ width: "18.75rem" }} />
          <h3>Watch on your TV</h3>
          <p>
            Smart Tv's, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players
            and more.
          </p>
        </div>

        {/* // Tablet container */}
        <div>
          <img
            src={ImgTablet}
            alt="second"
            style={{ width: "18.75rem", paddingTop: "0.625rem" }}
          />
          <h3>Watch on your tablet</h3>
          <p>
            Smart Tv's, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players
            and more.
          </p>
        </div>

        {/* // PC container */}
        <div>
          <img
            src={ImgPc}
            alt="third"
            style={{
              width: "18.75rem",
              paddingTop: "0.625rem",
              paddingBottom: "0.625rem",
            }}
          />
          <h3>Watch on your computer</h3>
          <p>
            Smart Tv's, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players
            and more.
          </p>
        </div>
      </div>
    </TabContainer>
  );
}

export default TabContentTwo;

// Media
const customMedia = generateMedia({
  smDesktop: "1440px",
  tablet: "1000px",
});

// Main Tab Content Container
const TabContainer = styled.div`
    background: var(--main-deep-dark);

    .tab-content {
        margin: 0 15%;
    }

    .tab-bottom-content-img {
      display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
        
        ${customMedia.lessThan("tablet")`
            grid-template-columns: 1fr;
        `}
    }

  h3 {
      margin: 0.5rem 0;
      color: var(--main-gray);
     
  }

  p {
      color: var(--main-dark-gray);

  }
    

    // Tab Top Content
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
        ${customMedia.lessThan("smDesktop")`
        grid-template-columns: repeat(2, 1fr);

        `}
        
        ${customMedia.lessThan("tablet")`
            grid-template-columns: repeat(1, 1fr);
            text-align: center;
            row-gap: 2.5rem;
        `}

    span {
        grid-column: 1 / 8;
        ${customMedia.lessThan("tablet")`
            grid-column: 1 / -1;
            font-size: 1.5rem;
        `}
    }

    .btn {
        grid-column: 10 /12;
        margin: 0 1.25rem 1.25rem;
        ${customMedia.lessThan("tablet")`
            grid-column: 1 / -1;
            margin-left: 30%;
            margin-right: 30%;
        `}
    }

    
    
    
`;
