import ReactPlayer from "react-player";
import "./css/Popup.css";

let click = false;

function Popup(movieOverview, trailerPlaying, trailerUrl) {
  if (click === false) {
    click = true;
    return (
      <div className="popUpBg">
        <div className="popUp_info">
          <ReactPlayer
            volume={1}
            muted={true}
            controls={false}
            width="100%"
            height="50%"
            playing={trailerPlaying}
            url={trailerUrl}
          />
          <div className="popUp_Description">
            <div className="infoBtns">
              <div>
                <button>play</button>
                <button>Mylist</button>
                <button>like</button>
                <button>dislike</button>
              </div>
              <button>mute</button>
            </div>
            <p>{movieOverview}</p>
          </div>
        </div>
      </div>
    );
  } else {
    click = false;
  }
}
export default Popup;
