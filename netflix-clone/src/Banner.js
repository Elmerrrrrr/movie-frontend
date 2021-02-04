import React, { useState, useEffect } from "react";
import axios from "./axios-3";
import "./css/Banner.css";
import Icon from "react-icons-kit";
import { play } from "react-icons-kit/fa/play";
import { info } from "react-icons-kit/icomoon/info";
import ReactPlayer from "react-player";
import requests from "./requests-3";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({ fetchUrl, setPopupMovie, setPopupTrailerUrl }) {
  const [trailerPlaying, setTrailerPlaying] = useState(false);
  const [movie, setMovie] = useState();
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      const randomMovie =
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ];

      const movieDetails = await axios.get(
        requests.fetchMovieDetails + "/" + randomMovie.id
      );

      setTrailerUrl("https://youtube.com/watch?v=" + movieDetails.data.trailer);
      setMovie(movieDetails.data);
    }

    fetchData();
  }, [fetchUrl]);

  function onPlayButtonClick() {
    setTrailerPlaying(!trailerPlaying);
    if (trailerPlaying === false) {
      document.querySelector("iframe").requestFullscreen();
    }
  }

  function onMoreInfoClick() {
    setPopupTrailerUrl(trailerUrl);
    setPopupMovie(movie);
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
            className="darkFather"
            volume={1}
            muted={false}
            controls={false}
            width="100%"
            height="108%"
            playing={trailerPlaying}
            url={trailerUrl}
            onError={(notfound) => (notfound.target.style.display = "none")}
          />
          <div className="banner_overlay">
            <div className="banner_contents">
              <img
                className="banner-img"
                //src={`${base_url}${movie?.production_companies[0].logo_path}`}
                alt="poster"
              />
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
          </div>
        </>
      )}
    </header>
  );
}

export default Banner;
