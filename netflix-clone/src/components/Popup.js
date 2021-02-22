import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { plus } from "react-icons-kit/feather/plus";
import { music_mute } from "react-icons-kit/linea/music_mute";
import Icon from "react-icons-kit";
import { play } from "react-icons-kit/fa/play";
import { androidClose } from "react-icons-kit/ionicons/androidClose";
import "../css/Popup.css";

function Popup({ movie, trailerUrl, togglePopup }) {
  const [trailerPlaying, setTrailerPlaying] = useState(false);

  useEffect(() => {
    document.body.style.position = "absolute";
    document.body.style.overflow = "hidden";
    document.body.style.width = "100%";

    return () => {
      document.body.style.position = "";
      document.body.style.overflow = "";
      document.body.style.width = "";
    };
  }, []);

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function onPlayButtonClick() {
    setTrailerPlaying(!trailerPlaying);
    if (trailerPlaying === false) {
      document.querySelector("iframe").requestFullscreen();
    }
  }

  return (
    <div className="modalBg">
      <div className="modalContainer">
        <div className="videomodal">
          <ReactPlayer
            volume={1}
            muted={false}
            controls={false}
            width="48.34rem"
            height="22.5rem"
            playing={trailerPlaying}
            url={trailerUrl}
          />

          <div className="modal_info">
            <button className="CloseBtn" onClick={togglePopup}>
              {" "}
              <Icon className="iconsize" icon={androidClose} />
            </button>
            <img
              className="Movie-logo"
              src={`${movie?.movielogos[0].url_hd}`}
              alt="logo"
            />
            <div className="modalBtns">
              <div>
                <button className="infoPlay" onClick={onPlayButtonClick}>
                  <Icon className="playInfo" icon={play} />
                  Play
                </button>
                <button className="RoundBtn">
                  <Icon className="iconsize" icon={plus} />
                </button>
                <button className="RoundBtn">
                  <Icon icon={thumbsUp} />
                </button>
                <button className="RoundBtn">
                  <Icon icon={thumbsDown} />
                </button>
              </div>
              <button className="RoundBtn">
                <Icon className="Mute" icon={music_mute} />
              </button>
            </div>
          </div>

          <div className="modal_Description">
            <div className="Movie_info">
              <div className="infoLeft">
                <div>
                  <p>{truncate(movie?.overview, 450)}</p>
                </div>
                <div>
                  <h4>Rated</h4>
                  <h2>{movie?.vote_average}</h2>
                </div>
                <div>
                  <h5>Director</h5>
                  <h4>{movie?.director}</h4>
                </div>
                <div>
                  <h4>Duration:</h4>
                  <h4>{movie?.runtime} Min</h4>
                </div>
              </div>
              <div className="infoRight">
                <div>
                  <h5>Cast:</h5>
                  {movie?.cast.map((actor) => (
                    <p>{actor.name}</p>
                  ))}
                </div>
                <div>
                  <h5>Genres:</h5>
                  {movie?.genres.map((genre) => (
                    <p>{genre.name}</p>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Popup;
