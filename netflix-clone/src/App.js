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
      <Router>
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

          <Route path="/Home">
            <HomeComponent />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
