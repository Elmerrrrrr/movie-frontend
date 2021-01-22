const API_KEY = "0e69efaad60720458ab5dd868865967e";

const requests = {
  fetchIntroBanner: `/movies/introBanner`,
  fetchDocumentaries:`/movies/genre/99`,
  fetchRomanceMovies: `/movies/genre/10749`,
  fetchHorrorMovies: `/movies/genre/27`,
  fetchActionMovies: `/movies/genre/28`,
  fetchComedyMovies: `/movies/genre/35`,
  fetchActionMovies: `/movies/genre/28`,
  fetchComedyMovies: `/movies/genre/35`,
  fetchTopRated: `/movies/toprated/1`,
 // fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  //fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,

};

export default requests;

