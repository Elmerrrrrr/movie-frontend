import React, { useState } from "react";
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

  function truncate(str, n) {
    return str?.length > n ? str.substr(0, n - 1) + "..." : str;
  }

  function onPlayButtonClick() {
    setTrailerPlaying(!trailerPlaying);
    document.querySelector("iframe").requestFullscreen();
  }

  
  return (
    <div className="modalBg">
      <div className="videomodal">
        <ReactPlayer
          volume={1}
          muted={true}
          controls={false}
          light={true}
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
            <Icon ClassName="Mute" icon={music_mute} />
          </button>
        </div>

        <div className="modal_Description">
          <h4>Vote Average</h4>
          <h2>{movie?.vote_average}</h2> <br/>
          <h4>Overview</h4> <br/>
          <p>{truncate(movie?.overview, 350)} 
          <br/><br/>

          <h5>Director</h5>
          <h2>{movie?.director}</h2> <br/>

          <h5>Length of the movie</h5>
          <h2>{movie?.runtime} Minutes</h2>
          
          
          </p> <br/>
          <h5>Genres</h5>
          {movie.genres.map((genre) => (
            <p>{genre.name}</p>
            
          ))}
        </div>
      </div>
    </div>
  );
}
export default Popup;
