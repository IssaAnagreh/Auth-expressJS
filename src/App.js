import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Signup from './registration/Signup.js';
import Login from './login/Login.js';
import Application from './application/Application.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
    }
  }

  componentDidMount() {
    // axios.get('/home', { withCredentials: true })
    //   .then(res => {
    //     console.log('res.user', res.data.user)
    //     this.setState({ token: res.data.user })
    //   })
  }

  render() {
    console.log('App: this.state.token', this.state.token)
    let isAuthed = this.state.token ? true : false
    console.log('isAuthed', isAuthed)
    if (isAuthed) {
    return (
      <Router className="App">
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/application" component={() => <Application isAuthed={isAuthed} />} />
            {/* <Route exact path="/logout" component={Logout} /> */}
            <Route path="/" component={() => <Login isAuthed={isAuthed} />} />
          </Switch>
        </Suspense>
      </Router>
    );
    } else {
      return (
        <Router className="App">
          <Suspense fallback={<div>Loading...</div>}>
            <Switch>
              <Route path="/application" component={() => <Application isAuthed={isAuthed} />} />
              <Route path="/signup" component={Signup} />
              <Route path="/" component={() => <Login isAuthed={isAuthed} />} />
            </Switch>
          </Suspense>
        </Router>
      )
    }

  }
}

export default App;
