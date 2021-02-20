import React, { Component } from "react";
import { search } from "./Utils";
import Movies from "./Movies";

class SearchLive extends Component {
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
    let movies = <h1>Search movies</h1>;
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
    // the search term is searchText["find"] please connect this part to back-end
    // this.search(searchText["find"]);
    // this.search(setState({value: searchText["find"]})); doesn't work
    // the default searchbar was already working so the new one has been Kamehamehahahahhaha

    return searchText["find"];
  }

  render() {
    return (
      <div className="searchContainer">
        <p>the results for searching {this.findMovie} are:</p>
        <div>
          <input
            value={this.state.value}
            onChange={(e) => this.onChangeHandler(e)}
            placeholder="Type to search"
          />
          {this.renderMovies}
        </div>
      </div>
    );
  }
}

export default SearchLive;
