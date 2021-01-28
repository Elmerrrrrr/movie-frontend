import React, { useState, useEffect } from "react";
import axios from "./axios-3";
import "./css/Banner.css";
import "./css/Popup.css";
import Icon from "react-icons-kit";
import { play } from "react-icons-kit/fa/play";
import { info } from "react-icons-kit/icomoon/info";
import ReactPlayer from "react-player";
import movieTrailer from "movie-trailer";
import { thumbsUp } from "react-icons-kit/feather/thumbsUp";
import { thumbsDown } from "react-icons-kit/feather/thumbsDown";
import { plus } from "react-icons-kit/entypo/plus";
import { music_mute } from "react-icons-kit/linea/music_mute";

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

  function onPlayButtonClick() {
    document.querySelector("iframe").requestFullscreen();
    setTrailerPlaying(!trailerPlaying);
  }

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
        <>
          <ReactPlayer
            volume={1}
            muted={false}
            controls={false}
            width="100%"
            height="100%"
            playing={trailerPlaying}
            url={trailerUrl}
          />
          <div className="banner_overlay">
            <div className="banner_contents">
              <h1 className="banner_title">
                {movie?.title || movie?.name || movie?.original_name}
              </h1>
              <h1 className="banner_description">
                {truncate(movie?.overview, 150)}
              </h1>
              <div className="banner_buttons">
                <button className="banner_button" onClick={onPlayButtonClick}>
                  <Icon className="play" icon={play} />
                  Play
                </button>
                <button className="banner_button">
                  <Icon className="info" icon={info} />
                  More Info
                </button>
              </div>
            </div>

            {/* //popup// */}

            <div className="modalBg">
              <div className="videomodal">
                <ReactPlayer
                  volume={1}
                  muted={true}
                  controls={false}
                  width="50%"
                  height="60%"
                  playing={trailerPlaying}
                  url={trailerUrl}
                />
              </div>

              <div className="modal_info">
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
                  <p>{truncate(movie?.overview, 150)}</p>
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </header>
  );
}

export default Banner;
