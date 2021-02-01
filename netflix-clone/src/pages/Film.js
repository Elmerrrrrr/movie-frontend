import React, { Component } from "react";
import Row from "../Row";
import requests from "../requests-3";
import Nav from "../Nav";
import Footer from "../components/Footer";
import "../css/App.css";

export default class Film extends Component {
  render() {
    return (
      <div>
        <Nav />

        <Row title="Action" fetchUrl={requests.fetchActionMovies} />
        <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
        <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
        <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
        <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

        <Footer />
      </div>
    );
  }
}
