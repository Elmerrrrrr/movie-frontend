import React, { useState, useEffect } from "react";
import ReactPlayer from "react-player";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { plus } from "react-icons-kit/entypo/plus";
import { music_mute } from "react-icons-kit/linea/music_mute";
import Icon from "react-icons-kit";
import { play } from "react-icons-kit/fa/play";
import { androidClose } from "react-icons-kit/ionicons/androidClose";
import "./css/Popup.css";

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
      <div className="videomodal">
        <ReactPlayer
          volume={1}
          muted={false}
          controls={false}
          width="50%"
          height="60%"
          playing={trailerPlaying}
          url={trailerUrl}
        />
      </div>

      <div className="modal_info">
        <button className="CloseBtn" onClick={togglePopup}>
          {" "}
          <Icon icon={androidClose} />
        </button>
        <div className="modalBtns">
          <div>
            <button className="infoPlay" onClick={onPlayButtonClick}>
              <Icon className="playInfo" icon={play} />
              Play
            </button>
            <button className="RoundBtn">
              <Icon icon={plus} />
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

        <div className="modal_Description">
          <p>{truncate(movie?.overview, 650)}</p>
          {movie?.genres?.map((genre) => (
            <p key={Math.random()}>{genre.name}</p>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Popup;
