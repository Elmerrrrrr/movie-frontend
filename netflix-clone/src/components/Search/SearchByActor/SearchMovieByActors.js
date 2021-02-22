import React, { Component } from 'react';
import axios from 'axios';
import { search } from "./utils";
import Movies from './Movies';

class SearchByActor extends Component {
  state = {
    movies: null,
    loading: false,
    value: ''
  };

  search = async val => {
    this.setState({ loading: true });
    const res = await axios(
        `http://localhost:2021/search/actors/${val}`
    );
    let resultss = [];
   await res.data.results.map((results) => (resultss.push(results.movies_list)));
    
    let movies = [];

for (let i = 0; i < resultss.length; i++) {
  
  
  for (let j = 0; j < resultss[i].length; j++) {
    
    movies.push(resultss[i][j]);
  }

}
  
      console.log(movies);


    this.setState({ movies, loading: false });
  };

  onChangeHandler = async e => {
    this.search(e.target.value);
    this.setState({ value: e.target.value });
  };

  get renderMovies() {
    let movies = <h1>Search by Actors</h1>;
    if (this.state.movies) {
      movies = <Movies list={this.state.movies} />;
    }

    return movies;
  }

  render() {
    return (
      <div>
        <input
          value={this.state.value}
          onChange={e => this.onChangeHandler(e)}
          placeholder="Type something to search"
        />
        {this.renderMovies}
      </div>
    );
  }
}

export default SearchByActor;