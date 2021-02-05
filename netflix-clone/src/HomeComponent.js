import React, { useState } from "react";
import Nav from "./Nav";
import Banner from "./Banner";
import Row from "./Row";
import Footer from "./components/Footer_2";
import requests from "./requests-3";
import Popup from "./Popup";

function HomeComponent() {
  const [activeMovie, setActiveMovie] = useState();
  const [trailerUrl, setTrailerUrl] = useState();

  function onPopupMoreInfoClick() {
    setActiveMovie(null);
    setTrailerUrl(null);
  }

  return (
    <React.Fragment>
      <Nav />
      {activeMovie && trailerUrl && (
        <Popup
          movie={activeMovie}
          trailerUrl={trailerUrl}
          togglePopup={onPopupMoreInfoClick}
        />
      )}
      <Banner
        title="Random"
        fetchUrl={fetchRandomMovie}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />
     
      <Row
        title="80s"
        fetchUrl={requests.fetch80sMovies}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />
      <Row
        title="90s"
        fetchUrl={requests.fetch90sMovies}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />
      <Row
        title="200s"
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

      <Footer />
    </React.Fragment>
  );
}

export default HomeComponent;
