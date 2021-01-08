import "./App.css";
import Row from "./Row";
import requests from "./requests";
import Banner from "./Banner";
import Nav from "./Nav.js";


import './css/Landingpage.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';


import Main from './pages/Landingpage';



function App() {
  return (
    <div className="App">

      <Router>  

        <Switch>   

          <Route path="/" exact component={() => <Main />} />

          <Route path="/home">  

            <Nav />

            <Banner />

            <Row
              title="NETFLIX ORIGINALS"
              fetchUrl={requests.fetchNetflixOriginals}
              isLargeRow
            />

            <Row title="Trending Now" fetchUrl={requests.fetchTrending} />
            <Row title="Top Rated" fetchUrl={requests.fetchTopRated} />
            <Row title="Action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

          </Route>

        </Switch>

      </Router>

    </div>
  );
}

export default App;
