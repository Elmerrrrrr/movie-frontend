import React, { useState, useEffect } from "react";
import axios from "./axios-3";
import requests from "./requests-3";
import "./css/Banner.css";
import { play } from "react-icons-kit/fa/play";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({ title, fetchUrl }) {
  const [movie, setMovie] = useState({});
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(requests.fetchIntroBanner);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const youtubeOpts = {
    height: "390",
    width: "100%",
    playerVars: {
      autoplay: 1,
      modestbranding: 1,
      controls: 0,
      rel: 0,
      fs: 0,
      iv_load_policy: 3,
      frameborder: 0,
      autohide: 1,
      showinfo: 0,
    },
  };

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function fetchMovieUrl(moviename) {
    movieTrailer(moviename)
      .then((url) => {
        const urlParamV = new URLSearchParams(new URL(url).search);
        setTrailerUrl(urlParamV.get("v"));
      })
      .catch((err) => console.log(err));
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
      <div className="videoBackground">
        {trailerUrl !== "" && (
          <YouTube videoId={trailerUrl} opts={youtubeOpts} />
        )}
      </div>
      <div className="banner_contents">
        <h1 className="banner_title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner_buttons">
          <icon icon={play} />
          <button className="banner_button">Play</button>
          <button className="banner_button">More Info</button>
        </div>
        <h1 className="banner_description">{truncate(movie?.overview, 150)}</h1>
      </div>
    </header>
  );
}

export default Banner;
