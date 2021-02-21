import React, { useState } from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import Footer from "../components/Footer_2";
import requests from "../requests-3";
import Popup from "../components/Popup";
import PopupCopy from "../components/PopupCopy";

function Homepage() {
  const [activeMovieBanner, setActiveMovieBanner] = useState();
  const [trailerUrlBanner, setTrailerUrlBanner] = useState();

  function onPopupMoreInfoClickBanner() {
    setActiveMovieBanner(null);
    setTrailerUrlBanner(null);
  }

  const [activeMovie, setActiveMovie] = useState();
  const [trailerUrl, setTrailerUrl] = useState();

  function onPopupMoreInfoClick() {
    setActiveMovie(null);
    setTrailerUrl(null);
  }

  return (
    <React.Fragment>
      <Nav />

      {activeMovieBanner && trailerUrlBanner && (
        <Popup
          movie={activeMovieBanner}
          trailerUrl={trailerUrlBanner}
          togglePopup={onPopupMoreInfoClickBanner}
        />
      )}

      {activeMovie && trailerUrl && (
        <PopupCopy
          movie={activeMovie}
          trailerUrl={trailerUrl}
          togglePopup={onPopupMoreInfoClick}
        />
      )}

      <Banner
        title="Random"
        fetchUrl={requests.fetchRandomMovie}
        setPopupMovie={setActiveMovieBanner}
        setPopupTrailerUrl={setTrailerUrlBanner}
      />

      <Row
        title="'80s"
        fetchUrl={requests.fetch80sMovies}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />
      <Row
        title="'90s"
        fetchUrl={requests.fetch90sMovies}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />
      <Row
        title="'00s"
        fetchUrl={requests.fetch00sMovies}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Disney"
        fetchUrl={requests.fetchDisney}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Denzel Washington"
        fetchUrl={requests.fetchActor}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />

      <Footer />
    </React.Fragment>
  );
}

export default Homepage;
