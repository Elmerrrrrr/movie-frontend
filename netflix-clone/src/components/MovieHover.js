import movieTrailer from "movie-trailer";
import React, { useEffect, useState } from "react";
import ReactPlayer from "react-player";
import "../css/MovieHovered.css";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { plus } from "react-icons-kit/entypo/plus";
import Icon from "react-icons-kit";
import { play } from "react-icons-kit/fa/play";
import { ic_keyboard_arrow_down } from "react-icons-kit/md/ic_keyboard_arrow_down";

const base_url = "https://image.tmdb.org/t/p/original/";

function MovieHover({
  toggle,
  movieDetails: { movie, pos },
  setPopupMovie,
  setPopupTrailerUrl,
}) {
  const [trailerUrl, setTrailerUrl] = useState();

  useEffect(() => {
    movieTrailer(movie.name || movie.title || movie.orginal_name)
      .then((url) => setTrailerUrl(url))
      .catch((err) => console.log(err));
  }, [movie]);

  function onPlayButtonClick() {
    document.querySelectorAll("iframe")[1].requestFullscreen();
  }

  function onMoreInfoClick() {
    toggle();
    setPopupMovie(movie);
    setPopupTrailerUrl(trailerUrl);
  }

  return (
    <div
      onMouseLeave={toggle}
      className="movie-hover-container"
      style={{
        left: pos.x,
        top: pos.y,
        backgroundSize: "100% 50%",
        backgroundRepeat: "no-repeat",
        backgroundImage: `url('${base_url}${movie?.backdrop_path}')`,
        backgroundPosition: "center top",
      }}
    >
      <div className="trailer-container">
        <ReactPlayer
          volume={1}
          width="100%"
          height="7.3rem"
          muted={true}
          controls={false}
          playing={true}
          url={trailerUrl}
        />
      </div>

      <div className="button-container">
        <button onClick={onPlayButtonClick} className="RowPlay">
          <Icon className="sizeBtns" icon={play} />
        </button>

        <button className="RowBtn">
          <Icon className="sizeBtns" icon={plus} />
        </button>

        <button className="RowBtn">
          <Icon className="sizeBtns" icon={thumbsUp} />
        </button>

        <button className="RowBtn">
          <Icon className="sizeBtns" icon={thumbsDown} />
        </button>

        <button onClick={onMoreInfoClick} className="RowBtn">
          <Icon className="sizeBtns" icon={ic_keyboard_arrow_down} />
        </button>
      </div>

      <div className="movie-details-container">
      <div>
                <h5>Director</h5>
                <h4>{movie?.director}</h4>
              </div>
              <div>
                <h4>Duration:</h4>
                <h4>{movie?.runtime} Min</h4>
              </div>
      </div>
    </div>
  );
}

export default MovieHover;
