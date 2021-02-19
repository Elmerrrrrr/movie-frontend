import React, { Component } from "react";


import { search } from "./utils";
import Movies from "./Movies";

class SearchLive extends Component {
  state = {
    movies: null,
    loading: false,
    value: ""
  };

  search = async val => {
    this.setState({ loading: true });
    const results = await search(
      `http://localhost:2021/search/movie/${val}`
      
    );
    const movies = results;

    this.setState({ movies, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderMovies() {
    let movies = <h1>Search movies</h1>;
    if (this.state.movies) {
      movies = <Movies list={this.state.movies} />;
    }

    return movies;
  }

  render() {
    return (
      <div className="searchContainer">
        <div>
          <input
            value={this.state.value}
            onChange={e => this.onChangeHandler(e)}
            placeholder="Type to search"
          />
          {this.renderMovies}
        </div>
      </div>
    );
  }
}

export default SearchLive;
