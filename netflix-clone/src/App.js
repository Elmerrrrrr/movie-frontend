import "./css/App.css";
import "./css/Landingpage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import Main from "./pages/Landingpage";
import Homepage from "./pages/Homepage";
import Filmspage from "./pages/Filmspage";
import Discoverpage from "./pages/Discoverpage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          {/* This is the landingpage */}
          <Route path="/" exact component={() => <Main />} />

          {/* From here it is the main page with all the video content */}
          <Route path="/Discover">
            <Discoverpage />
          </Route>

          <Route path="/Films">
            <Filmspage />
          </Route>

          <Route path="/Home">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
