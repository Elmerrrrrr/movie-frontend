import React, { useState, useEffect } from "react";
import axios from "./axios-3";
import "./css/Banner.css";
import Icon from "react-icons-kit";
import { play } from "react-icons-kit/fa/play";
import { info } from "react-icons-kit/icomoon/info";
import ReactPlayer from "react-player";
import requests from "./requests-3";
import Popup from "./Popup";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({ fetchUrl }) {
  const [trailerPlaying, setTrailerPlaying] = useState(true);
  const [movie, setMovie] = useState();
  const [trailerUrl, setTrailerUrl] = useState("");
  const [showPopup, setShowPopup] = useState(false);
  

  useEffect(() => {
    async function fetchData() {

      const randomMovie = await axios.get(
        requests.fetchRandom
      );

      setTrailerUrl("https://youtube.com/watch?v=" + randomMovie.data.trailer);
      setMovie(randomMovie.data);
    }

    fetchData()
    .catch(e => {
      console.log("I am afraid there is a slight problem with the fetch operation: " + e.message)
    })
    
  }, [fetchUrl]);
  

  
  function onPlayButtonClick() {
    setTrailerPlaying(!trailerPlaying);
    document.querySelector("iframe").requestFullscreen();
  
  }
    
  function onMoreInfoClick() {
    setShowPopup(!showPopup);
    if (trailerPlaying === true) {
      setTrailerPlaying(!trailerPlaying);
    }
  }

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
        backgroundPosition: "center center",
      }}
    >
      {trailerUrl && (
        <>
          <ReactPlayer
            volume={1}
            muted={true}
            controls={false}
            light={false}
            width="100%"
            height="108%"
            playing={trailerPlaying}
            url={trailerUrl + "?t=10"} className="hide-play-button"
            onError={(notfound) => (notfound.target.style.display = "none")}
          />
          <div className="banner_overlay">

            <h2 id="error_message"></h2>

            <div className="banner_contents">

              <div className="banner-poster">  
                <img className="banner-img" src= {`${base_url}${movie?.production_company[0].logo_path}`} alt="poster"/>
               
              </div>

              <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <h1 className="banner_description">
                {truncate(movie?.overview, 150)}
              </h1>
              <div className="banner_buttons">
                <button className="banner_button" onClick={onPlayButtonClick}>
                  <Icon className="play" icon={play} />
                  Play
                </button>
                <button className="banner_button" onClick={onMoreInfoClick}>
                  <Icon className="info" icon={info} />
                  More Info
                </button>
              </div>
            </div>

            {/* //popup// */}
            {showPopup && (
              <Popup
                movie={movie}
                trailerUrl={trailerUrl}
                togglePopup={onMoreInfoClick}
              />
            )}
          </div>
        </>
      )}
    </header>
  );
}

export default Banner;
      
      
      

