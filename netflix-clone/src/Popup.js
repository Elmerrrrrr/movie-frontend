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

      

      {/* buttons and icons */}
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

        {/* movie information */}
        <div className="modal_Description">
          <div className="length-director-overview">    
            <h4>Vote Average</h4>
            <h2>{movie?.vote_average}</h2> <br/>

            <h4>Overview</h4>
            <p>{truncate(movie?.overview, 250)}</p>
            <br/>
            
            <h5>Director</h5>
            <h4>{movie?.director}</h4> <br/>

            <h4>Length of the movie</h4>
            <h4>{movie?.runtime} Minutes</h4>

           <img className="movie-logo" src={movie?.movie_logo_urls.movielogos[0].url_hd} alt="logo"/>

          </div>
            

            
            
          <div className="cast-genres">   
            <h5>Cast</h5>
            {/* hard coded for now, this is not the way to do it.. data is coming in */}
            {movie.cast.map((actor) => (
              <p>{actor.name} {"as: "} {actor.character}</p>
              
            ))}
            
            <br/>
            <h5>Genres</h5>
            {movie.genres.map((genre) => (
              <p>{genre.name}</p>
              
            ))}
          </div>

        </div>
      </div>
    </div>
  );
}
export default Popup;

            
            
            
            






          

          
          

            


           
