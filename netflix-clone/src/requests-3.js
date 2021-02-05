const requests = {
  fetchIntroBanner: `/movies/introBanner`,
  fetchDocumentaries: `/movies/genre/99`,
  fetchRomanceMovies: `/movies/genre/10749`,
  fetchHorrorMovies: `/movies/genre/27`,
  fetchActionMovies: `/movies/genre/28`,
  fetchComedyMovies: `/movies/genre/35`,
  fetchTopRated: `/movies/toprated/1`,
  fetchMovieDetails: `/movie/details`, //  info popup /movie/details/(id) movie id prop geven, dynamisch maken
  fetch80sMovies: `/movies/80s`,
  fetch90sMovies: `/movies/90s`,
  fetch00sMovies: `/movies/00s`,
  fetchDisney: `/movies/company/6125`,
  fetchThrillerMovies: `/movies/genre/53`,
  fetchAdventure: `/movies/genre/12`,
  fetchFamilyMovies: `/movies/genre/10751`,
  fetchFantasyMovies: `/movies/genre/14`,
  fetchCrimeMovies: `/movies/genre/80`,
  fetchRandomMovie: `/movie/random`,// need backend V1.3 for this
};

export default requests;
