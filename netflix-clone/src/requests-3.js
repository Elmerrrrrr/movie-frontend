const requests = {
  fetchRandomMovie: `/movies/random`, // need backend V1.3 for this
  fetchIntroBanner: `/movies/introBanner`,
  fetchDocumentaries: `/movies/genre/99`,
  fetchRomanceMovies: `/movies/genre/10749`,
  fetchHorrorMovies: `/movies/genre/27`,
  fetchActionMovies: `/movies/genre/28`,
  fetchComedyMovies: `/movies/genre/35`,
  fetchTopRated: `/movies/toprated/1`,
  fetchMovieDetails: `/movie/details`, //  info popup /movie/details/(id) movie id prop geven, dynamisch maken

  
};

export default requests;
