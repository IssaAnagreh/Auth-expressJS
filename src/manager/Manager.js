/* eslint-disable no-undef */
import React, { Component } from 'react';
import { BrowserRouter as Redirect, Switch, Route, Router, Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom'
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
import ManagerApps from '../application/ManagerApps';

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

class Manager extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      token: '',
    }
  }

  componentDidMount() {
    axios.get('/checkuser', { withCredentials: true })
      .then(res => {
        console.log('in login', res.data.user)
        this.setState({ token: res.data.user })
      })
      .catch(err => console.log('Manager checkuser err', err))
  }

  onSubmit(event) {
    //event.preventDefault();
    axios.post('/manager', this.state, { withCredentials: true })
      .then(res => console.log('logged in'))
    // $.ajax({
    //   type: 'POST',
    //   url: '/login',
    //   data: this.state,
    //   xhrFields: {
    //     withCredentials: true
    //   },
    //   success: (data) => {
    //     console.log('logged in')
    //   },
    //   error: (err) => {
    //     console.log('wrong password or username');
    //   }
    // });
    console.log('login: this.state.token', this.state.token)
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
    // console.log('Login: url', this.props.location)

    if (!this.state.token) {
      return (
        <main className={classes.main} >
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Manager
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
              <p style={{ margin: "0px" }}>Are you an <Link style={{ textDecoration: "none" }} to="/employee">Employee</Link> ?</p>
              <Link style={{ textDecoration: "none" }} to="/login">Back</Link>
          </Paper>
        </main>
      );
    } else {
      console.log('Manager -> redirect')
      return (
        <>
          <Redirect to={{ pathname: '/application' }} />
          <ManagerApps />
        </>
      )
    }
  }
}


Manager.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Manager);

        // {/* <Application isAuthed={this.state.token}/>
        //   <Route path='/application' component={Application} /> */}
