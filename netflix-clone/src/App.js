import "./css/App.css";
import Row from "./Row";
import requests from "./requests-3";
import Banner from "./Banner";
import Nav from "./Nav.js";
import Footer from "./components/Footer_2";
import "./css/Landingpage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Landingpage";
import Login from "./pages/Login";
import Film from "./pages/Film";
import Discover from "./pages/Discover";
import history from './history';


function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {/* This is the landingpage */}
          <Route path="/" exact component={() => <Main />} />

           {/* This is the logingpage */}
          <Route path="/login" component={Login} />

          {/* From here it is the main page with all the video content */}
          <Route path="/home">
            <Nav />

            <Banner fetchUrl={requests.fetchTopRated} />

            <Row title="Action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />

            <Footer />
          </Route>

           {/* This is the Discover page */}
           <Route path="/discover" component={Discover} />


            {/* This is the Film page */}
          <Route path="/film" component={Film} />


        </Switch>
      </Router>
    </div>
  );
}

export default App;

