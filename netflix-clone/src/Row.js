import React, { useState, useEffect } from "react";
import axios from "./axios-3";
import "./css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isLargeRow }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  console.log(movies);
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
      
    }
    fetchData();
  }, [fetchUrl]);
  const youtubeOpts = {
    height: "390px",
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
  const movieClicked = (moviename) => {
    if (trailerUrl !== "") setTrailerUrl("");
    else {
      movieTrailer(moviename)
        .then((url) => {
          const urlParamV = new URLSearchParams(new URL(url).search);
          setTrailerUrl(urlParamV.get("v"));
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>
      
      <div className="row_posters">
        {movies.map((movie) => (
          <img
            onClick={() =>
              movieClicked(movie.name || movie.title || movie.orginal_name)
            }
            key={movie.id}
            className={`row_poster ${isLargeRow && "row_posterLarge"}`}
            src={`${base_url}${
              isLargeRow ? movie.poster_path : movie.backdrop_path
            }`}
            alt={movie.name}
          />
        ))}
      </div>
      {trailerUrl !== "" && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
    </div>
  );
}

export default Row;
