import React, { Component } from "react";
import { search } from "./utils";
import Movies from "./Movies";

class SearchByActor extends Component {
  state = {
    movies: null,
    loading: false,
    value: "",
  };

  search = async (val) => {
    this.setState({ loading: true });
    const results = await search(`http://localhost:2021/search/movie/${val}`);
    const movies = results;

    this.setState({ movies, loading: false });
  };

  onChangeHandler = async (e) => {
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

  get findMovie() {
    let parts = window.location.search.substr(1).split("&");
    let searchText = {};
    for (let i = 0; i < parts.length; i++) {
      let temp = parts[i].split("=");
      searchText[decodeURIComponent(temp[0])] = decodeURIComponent(temp[1]);
    }


  }

  render() {
    return (
      <div className="searchContainer">
       <div>
          <input
            autocomplete="off"
            id= "searchInput"
            value={this.state.value}
            onChange={(e) => this.onChangeHandler(e)}
            placeholder="Search by movie names"
          />
          <div id="autocom-box-movie" className="autocom-box-movie"></div>
          {this.renderMovies}
        </div>
      </div>
    );
  }
}

export default SearchByActor;
