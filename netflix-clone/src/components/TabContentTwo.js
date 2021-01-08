import React from 'react';
import { Button } from './Button';
import styled from 'styled-components';
import ImgTv from '../images/tab-tv.png';
import ImgTablet from '../images/tab-tablet.png';
import ImgPc from '../images/tab-macbook.png';


function TabContentTwo() {
    return (
        <TabContainer>
            <div className="tab-content">
                <div className="tab-top-content">
                    <span style={{fontSize: '1.5rem'}}>Watch TV shows and movies anytime, anywhere -
                        personalized for you.
                    </span>
                    <Button className="btn">try it now</Button>
                </div>
                {/* // Tab Bottom Content */}
                <div className="tab-bottom-content">
                    {/* // TV container */}
                    <div>
                        <img src={ImgTv} style={{width: '18.75rem'}}/>
                        <h3>Watch on your TV</h3>
                        <p>Smart Tv's, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>   
                    </div>

                    {/* // Tablet container */}
                    <div>
                        <img src={ImgTablet} style={{width: '18.75rem', paddingTop: '0.625rem'}}/>
                        <h3>Watch on your tablet</h3>
                        <p>Smart Tv's, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>   
                    </div>

                     {/* // PC container */}
                    <div>
                        <img src={ImgPc} style={{width: '18.75rem', paddingTop: '0.625rem', paddingBottom: '0.625rem'}}/>
                        <h3>Watch on your computer</h3>
                        <p>Smart Tv's, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.</p>   
                    </div>

                </div>
            </div>
            
        </TabContainer>
    );
}

export default TabContentTwo;

// Main Tab Content Container
const TabContainer = styled.div `
    background: var(--main-deep-dark);

    .tab-content {
        margin: 0 15%;
    }
    // Tab Top Content
    .tab-top-content {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        justify-content: center;
        align-items: center;
        padding: 2.5rem 0;
    }

    span {
        grid-column: 1 / 8;
    }

    .btn {
        grid-column: 10 /12;
        margin: 0 1.25rem 1.25rem;
    }

    .tab-bottom-content {
        display: grid;
        grid-template-columns: repeat(3, 1fr);
        grid-gap: 2rem;
        text-align: center;
        margin-top: 2rem;
    }

    h3 {
        margin: 0.5rem 0;
    }

    p {
        color: var(--main-gray);

    }

`