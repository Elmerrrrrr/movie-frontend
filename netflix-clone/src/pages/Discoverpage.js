import React, { useState } from "react";
import Nav from "../components/Nav";
import Banner from "../components/Banner";
import Row from "../components/Row";
import Footer from "../components/Footer_2";
import requests from "../requests-3";
import Popup from "../components/Popup";

function Discoverpage() {
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
        fetchUrl={requests.fetchRandomMovie}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />

      <Row
        title="Comedy"
        fetchUrl={requests.fetchComedyMovies}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Action"
        fetchUrl={requests.fetchActionMovies}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Thriller"
        fetchUrl={requests.fetchThrillerMovies}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Family"
        fetchUrl={requests.fetchFamilyMovies}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Fantasy"
        fetchUrl={requests.fetchFantasyMovies}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />
      <Row
        title="Crime"
        fetchUrl={requests.fetchCrimeMovies}
        setPopupMovie={setActiveMovie}
        setPopupTrailerUrl={setTrailerUrl}
      />

      <Footer />
    </React.Fragment>
  );
}

export default Discoverpage;
