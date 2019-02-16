/* eslint-disable no-undef */
import React, { Component } from 'react';
import { BrowserRouter as Redirect, Switch, Route } from 'react-router-dom';
import {withRouter} from 'react-router-dom'
import PropTypes from 'prop-types';
import axios from 'axios'
import $ from 'jquery'
import { connect } from 'react-redux';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
// import Checkbox from '@material-ui/core/Checkbox';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';
import './Login.css';
import Application from '../application/Application';

axios.defaults.withCredentials = true;

const styles = theme => ({
  main: {
    width: 'auto',
    display: 'block', // Fix IE 11 issue.
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: 'auto',
      marginRight: 'auto',
    },
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme.spacing.unit * 3}px`,
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: '100%', // Fix IE 11 issue.
    marginTop: theme.spacing.unit,
  },
  submit: {
    marginTop: theme.spacing.unit * 3,
  },
});

class Login extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      token: '',
    }
  }

  componentDidMount() {
    axios.get('/home', { withCredentials: true })
      .then(res => {
        console.log('in login', res.data.user)
        this.setState({ token: res.data.user })
      })
  }

  onSubmit() {
    //e.preventDefault();
    // axios.post('/login', this.state, {withCredentials: true})
    //   .then(res => console.log('in'))
    $.ajax({
      type: 'POST',
      url: '/login',
      data: this.state,
      xhrFields: {
        withCredentials: true
      },
      success: (data) => {
        console.log('logged in')
      },
      error: (err) => {
        alert('wrong password or username');
      }
    });
  }

  onEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  handleForgotPassword() {
    axios.get('/reset')
      .then(res => '')
  }

  render() {
    const { classes } = this.props;
    console.log('login: this.state.token', this.state.token)
    console.log('login: this.props.isAuthed', this.props.isAuthed, this.props.routes)
    if (!this.state.token) {
      return (
        <main className={classes.main} >
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Login
          </Typography>
            <form className={classes.form}>
              <FormControl margin="normal" required fullWidth>
                <InputLabel>Email Address</InputLabel>
                <Input autoComplete="text" autoFocus onChange={this.onEmailChange.bind(this)} />
              </FormControl>
              <FormControl margin="normal" required fullWidth>
                <InputLabel htmlFor="password">Password</InputLabel>
                <Input type="password" autoComplete="current-password" onChange={this.onPasswordChange.bind(this)} />
              </FormControl>
              <Button
                type="submit"
                fullWidth
                variant="contained"
                color="primary"
                className={classes.submit}
                onClick={this.onSubmit.bind(this)}
              >
                Login
            </Button>
            </form>
            <p>Do you have an account? if not <span><a href="/signup">Register</a></span> now.</p>
            {/* <p><span><a href="#" onClick={this.handleForgotPassword.bind(this)}>Forgot</a></span> your password?</p> */}
            <p><span><button
              type="button"
              className="link-button"
              onClick={this.handleForgotPassword.bind(this)}>
              <p style={{ margin: "0px" }}>Forgot</p></button></span> your password?</p>

          </Paper>
        </main>
      );
    } else {
      console.log('login -> redirect')
      return (
        // <Switch>
        //   <Route path='/application' component={Application} />
        //   <Redirect from='/' to='/application' />
        // </Switch>
        <>
        <Redirect
          to={{
            pathname: "/application"
          }}
        />
        {/* <Application isAuthed={this.state.token}/> */}
        </>
      )
    }
  }
}


Login.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Login);
