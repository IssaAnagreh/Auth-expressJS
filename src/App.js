import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import './App.css';
import Signup from './registration/Signup.js';

class App extends Component {
  render() {
    return (
      <Router className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route exact path="/signup" component={Signup} />
          </Switch>
        </Suspense>
      </Router>
    );
  }
}

export default App;
