import "./css/App.css";
import "./css/Landingpage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Landingpage";
import Homepage from "./pages/Homepage";
import Film from "./pages/Filmspage";
import Discover from "./pages/Discoverpage";

import Login from "./pages/Login";
import history from './history';

function App() {
  return (
    <div className="App">
      <Router history={history} >
        <Switch>
          {/* This is the landingpage */}
          <Route path="/" exact component={() => <Main />} />

           {/* This is the logingpage */}
           <Route path="/login" component={Login} />

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

