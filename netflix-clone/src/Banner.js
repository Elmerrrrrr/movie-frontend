import React, { useState, useEffect } from "react";
import axios from "./axios-3";
import "./css/Banner.css";
import { play } from "react-icons-kit/fa/play";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Banner({ fetchUrl }) {
  const [trailerPlaying, setTrailerPlaying] = useState(false);
  const [movie, setMovie] = useState();
  const [trailerUrl, setTrailerUrl] = useState("");

  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovie(
        request.data.results[
          Math.floor(Math.random() * request.data.results.length - 1)
        ]
      );
    }

    fetchData();
  }, [fetchUrl]);

  useEffect(() => {
    async function fetchMovieUrl() {
      try {
        const result = await movieTrailer(
          movie.name || movie.title || movie.orginal_name
        );

        setTrailerUrl(result);
      } catch (err) {
        console.error(err);
      }
    }

    if (movie) {
      fetchMovieUrl();
    }
  }, [movie]);

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
        <div>
          <ReactPlayer
            volume={1}
            muted={true}
            playing={trailerPlaying}
            url={trailerUrl}
          />
          <div className="banner_contents">
            <h1 className="banner_title">
              {movie?.title || movie?.name || movie?.original_name}
            </h1>
            <div className="banner_buttons">
              <icon icon={play} />
              <button
                className="banner_button"
                onClick={() => setTrailerPlaying(!trailerPlaying)}
              >
                Play
              </button>
              <button className="banner_button">More Info</button>
            </div>
            <h1 className="banner_description">
              {truncate(movie?.overview, 150)}
            </h1>
          </div>
        </div>
      )}
    </header>
  );
}

export default Banner;
