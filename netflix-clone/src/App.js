import "./css/App.css";
import "./css/Landingpage.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Main from "./pages/Landingpage";
import Homepage from "./pages/Homepage";
import Film from "./pages/Filmspage";


import Login from "./pages/Login";
import history from './history';

function App() {
  return (
    <div className="App">
<<<<<<< HEAD
      <Router history={history} >
=======
      <Router>
>>>>>>> aaee4b83b12e748329da06fc3ea0f5cc3478719d
        <Switch>
          {/* This is the landingpage */}
          <Route path="/" exact component={() => <Main />} />

<<<<<<< HEAD
           {/* This is the logingpage */}
           <Route path="/login" component={Login} />
=======
          {/* From here it is the main page with all the video content */}

          <Route path="/films">
            <Film />
          </Route>
>>>>>>> aaee4b83b12e748329da06fc3ea0f5cc3478719d

          <Route path="/home">
            <Homepage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
