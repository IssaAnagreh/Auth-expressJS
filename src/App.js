import React, { Component, Suspense } from 'react';
import { BrowserRouter as Router, Route, Switch, Link } from 'react-router-dom';
import axios from 'axios'
import './App.css';
import Signup from './registration/Signup.js';
import Login from './login/Login.js';
import Application from './application/Application.js';
import Employee from './employee/Employee.js';
import Manager from './manager/Manager.js';


class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      token: '',
    }
  }

  componentDidMount() {
    console.log('in App')
    // axios.get('/', { withCredentials: true })
    //   .then(res => {
    //     console.log('res.user', res.data.user)
    //     this.setState({ token: res.data.user })
    //   })
  }

  render() {
    // let isAuthed = this.state.token ? true : false
    // console.log('isAuthed', isAuthed)
    return (
      <div>
      <Router className="App">
        <Suspense fallback={<div>Loading..</div>}>
          <Switch>
            <Route exact path="/application" component={Application} />
            {/* <Route exact path="/logout" component={Logout} /> */}
            <Route path="/signup" component={Signup} />
            <Route path="/login" component={Login} />
            <Route path="/employee" component={Employee} />
            <Route path="/manager" component={Manager} />
            <Route path="/" component={Login} />
          </Switch>
          
        </Suspense>
      </Router>
      </div>
    );
  }
}

export default App;
