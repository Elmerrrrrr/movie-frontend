import "./css/App.css";
import "./css/Landingpage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Landingpage";

import HomeComponent from "./HomeComponent";
import FilmsComponent from "./FilmsComponent";
import DiscoverComponent from "./DiscoverComponent";



function App() {
  return (
    <div className="App">
      <Router history={history}>
        <Switch>
          {/* This is the landingpage */}
          <Route path="/" exact component={() => <Main />} />


          {/* From here it is the main page with all the video content */}
          <Route path="/Discover">
            <DiscoverComponent />
          </Route>

          <Route path="/Films">
            <FilmsComponent />
          </Route>

           {/* This is the logingpage */}
          <Route path="/login" component={Login} />

          {/* From here it is the main page with all the video content */}
          <Route path="/home">
            <Nav />

            <Banner />

            <Row title="Action" fetchUrl={requests.fetchActionMovies} />
            <Row title="Comedy" fetchUrl={requests.fetchComedyMovies} />
            <Row title="Horror" fetchUrl={requests.fetchHorrorMovies} />
            <Row title="Romance" fetchUrl={requests.fetchRomanceMovies} />
            <Row title="Documentaries" fetchUrl={requests.fetchDocumentaries} />
            <Row title="Disney Movies" fetchUrl={requests.fetchDisney} />



        </Switch>
      </Router>
    </div>
  );
}

export default App;

