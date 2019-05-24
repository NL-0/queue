import React from 'react';
import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/Header';
import About from './pages/About';
import Jono from './components/Jono';

function App() {
  return (
    <Router>
        <div className="App">
          <div className="container">
            <Header />
            <Route exact path="/" render={props => (
              <React.Fragment>
                <Jono />
              </React.Fragment>
            )} />
            <Route path="/about" component={About} />
          </div>
        </div>
    </Router>

  )
}

export default App;
