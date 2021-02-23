import React, { Component } from 'react';
// import axios from 'axios';
import { search } from "./utils";
import Movies from './Movies';
import "../../../css/Search.css";

class SearchByActor extends Component {
  state = {
    movies: null,
    loading: false,
    value: ''
  };

  search = async val => {
    this.setState({ loading: true });
    const results = await search(
        `http://localhost:2021/search/actors/${val}`
    );
    const movies = results;
  
      console.log(movies);


    this.setState({ movies, loading: false });
  };

  

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderMovies() {
    let movies = "";
    if (this.state.movies) {
      movies = <Movies list={this.state.movies} />;
    }

    return movies;
  }

  render() {
    return (
      <div className="searchActorContainer">
        <div className="search-input">
        <input
          autocomplete="off"
          id="searchBox"
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Search by actor, director"
        />
        <div id="autocom-box" className="autocom-box"></div>
        </div>
        {this.renderMovies}
      </div>
    );
  }
}

export default SearchByActor;