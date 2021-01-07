import './css/App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { Home } from "./components";

import Main from './pages'

function App() {
  return (
    <div className="App">
      <Router>
        
      
        
        
        <Switch>
          <Route path="/" exact component={() => <Main />} />
          <Route path="/home" exact component={() => <Home />} />
          
        </Switch>
        
      
      
      </Router>

        
        
        
      </div>
  );
}

export default App;
