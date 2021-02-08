import "./css/App.css";
import "./css/Landingpage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Landingpage";
import Homepage from "./pages/Homepage";
import Film from "./pages/Filmspage";
import Discover from "./pages/Discoverpage";

function App() {
  return (
    <div className="App">
      <Router >
        <Switch>
          {/* This is the landingpage */}
          <Route path="/" exact component={() => <Main />} />

          {/* From here it is the main page with all the video content
          <Route path="/Discover">
            <Discoverpage />
          </Route> */}

          {/* <Route path="/Films">
            <Film />
          </Route> */}

          <Route path="/home">
            <Homepage />
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

