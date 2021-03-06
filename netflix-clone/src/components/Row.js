import React, { useState, useEffect } from "react";
import axios from "../axios-3";
import "../css/Row.css";
import YouTube from "react-youtube";
import movieTrailer from "movie-trailer";
import MovieHover from "../components/MovieHover";
import Icon from "react-icons-kit";
import { chevronLeft } from "react-icons-kit/ionicons/chevronLeft";
import { chevronRight } from "react-icons-kit/ionicons/chevronRight";

const base_url = "https://image.tmdb.org/t/p/original/";

function Row({ title, fetchUrl, isRow, setPopupMovie, setPopupTrailerUrl }) {
  const [movies, setMovies] = useState([]);
  const [trailerUrl, setTrailerUrl] = useState("");
  const [hoveredMovieDetails, setHoveredMovieDetails] = useState(null);
  const ref = React.useRef(null);
  const [amountScrolled, setAmountScrolled] = useState(0);


  useEffect(() => {
    async function fetchData() {
      const request = await axios.get(fetchUrl);
      setMovies(request.data);
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

  const onMovieHover = (movie) => ({ target }) => {
    setHoveredMovieDetails({
      movie,
      pos: {
        y: target.offsetTop,
        x: target.offsetLeft,
      },
    });
  };



  function next() {
    let container = ref.current;
    if (amountScrolled < 19) {
      sideScroll(container, "right", 5, 500, 2);
      setAmountScrolled(amountScrolled +1)
      
    } else {
    
      setAmountScrolled(19)
    }
  }

  function previous() {
    let container = ref.current;
    if (amountScrolled > 0) {
      sideScroll(container, "left", 5, 500, 2);
      setAmountScrolled(amountScrolled -1)
    } else {

      setAmountScrolled(0)
      
    }
  }

  function sideScroll(element, direction, speed, distance, step) {
    let scrollAmount = 0;
    let slideTimer = setInterval(function () {
      if (direction === "left") {
        element.scrollLeft -= step;
      } else {
        element.scrollLeft += step;
      }
      scrollAmount += step;
      if (scrollAmount >= distance) {
        window.clearInterval(slideTimer);
      }
    }, speed);
  }
  return (
    <div className="row">
      <h2>{title}</h2>
      <div className="scroll">
        <div className="darkL">
          <button className="buttonLeft" onClick={() => previous()}>
            <Icon className="leftclick" icon={chevronLeft} />
          </button>
        </div>

        <div className="row_posters" ref={ref}>
          {movies.map((movie) => (
            <img
              onMouseOver={onMovieHover(movie)}
              onClick={() =>
                movieClicked(movie.name || movie.title || movie.orginal_name)
              }
              key={movie.id}
              className={`row_poster${isRow ? " row_poster" : ""}`}
              src={`${base_url}${
                isRow ? movie.poster_path : movie.backdrop_path
              }`}
              alt={movie.name}
            />
          ))}
        </div>
        <div className="darkR">
          <button className="buttonRight" onClick={() => next()}>
            <Icon className="rightclick" icon={chevronRight} />
          </button>
        </div>
      </div>

      {trailerUrl !== "" && <YouTube videoId={trailerUrl} opts={youtubeOpts} />}
      {hoveredMovieDetails && (
        <MovieHover
          key={Math.random()}
          movieDetails={hoveredMovieDetails}
          toggle={() => setHoveredMovieDetails(null)}
          setPopupMovie={setPopupMovie}
          setPopupTrailerUrl={setPopupTrailerUrl}
        />
      )}
    </div>
  );
}

export default Row;
