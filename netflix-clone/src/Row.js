import React, { useState, useEffect } from "react";
import axios from "./axios-3";
import "./css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);
  const youtubeOpts = {
    height: "183px",
    width: "325px",
    playerVars: {
      autoplay: 0,
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

  const popUpContentDisplay = (classnaming) => {
    classnaming = "";
    if (classnaming !== "" && classnaming !== undefined) {
      classnaming.style.display = "block";
    }
  };

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row_posters">
        {movies.map((movie) => (
          <div>
            <img
              key={movie.id}
              className={`row_poster ${movie.title}`}
              src={`${base_url}${movie.backdrop_path}`}
              alt={movie.name}
              onMouseOver={
                (() =>
                  movieClicked(movie.name || movie.title || movie.orginal_name),
                popUpContentDisplay(`row_poster ${movie.title}`))
              }
            />
            <div className="Popup">
              {trailerUrl !== "" && (
                <YouTube videoId={trailerUrl} opts={youtubeOpts} />
              )}
              <div className="Popupcontent">
                <button></button>
                <button></button>
                <button></button>
                <button></button>
                <button></button>
              </div>
            </div>
          </div>
        ))}{" "}
      </div>
    </div>
  );
}

export default Row;
