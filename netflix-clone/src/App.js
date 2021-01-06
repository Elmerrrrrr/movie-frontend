import './css/App.css';
import { Switch, Route } from 'react-router-dom';

import Main from './pages'

function App() {
  return (
    <div className="App">
      
        
        
        <Switch>
          <Route path="/" component={Main} />
        </Switch>

        
        
        
      </div>
  );
}

export default App;
