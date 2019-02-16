/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios'
import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import FormControl from '@material-ui/core/FormControl';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import withStyles from '@material-ui/core/styles/withStyles';

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
    marginTop: theme.spacing.unit * 4,
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

class Signup extends Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      firstName: '',
      lastName: '',
      password: '',
      rePassword: '',
      information: '',
      phonenumber: null,
    }
  }

  onSubmit() {
    axios.post('/signup', this.state)
      .then(res => console.log('in'))
  }

  onEmailChange(event) {
    this.setState({
      email: event.target.value
    })
  }

  onFirstNameChange(event) {
    this.setState({
      firstName: event.target.value
    })
  }

  onLastNameChange(event) {
    this.setState({
      lastName: event.target.value
    })
  }

  onPasswordChange(event) {
    this.setState({
      password: event.target.value
    })
  }

  onPassword2Change(event) {
    this.setState({
      rePassword: event.target.value
    })
  }

  onInformationChange(event) {
    this.setState({
      information: event.target.value
    })
  }

  onNumberChange(event) {
    this.setState({
      phonenumber: event.target.value
    })
  }

  render() {
    const { classes } = this.props;
    return (
      <main className={classes.main} >
        <CssBaseline />
        <Paper className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Registration
        </Typography>
          <form className={classes.form}>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Email Address</InputLabel>
              <Input autoComplete="email" autoFocus onChange={this.onEmailChange.bind(this)} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>First Name</InputLabel>
              <Input type="text" autoComplete="given-name" onChange={this.onFirstNameChange.bind(this)} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Last Name</InputLabel>
              <Input type="text" autoComplete="family-name" onChange={this.onLastNameChange.bind(this)} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input type="password" autoComplete="current-password" onChange={this.onPasswordChange.bind(this)} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel htmlFor="password">Re-Type Password</InputLabel>
              <Input type="password" autoComplete="current-password" onChange={this.onPassword2Change.bind(this)} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Information</InputLabel>
              <Input type="text" onChange={this.onInformationChange.bind(this)} />
            </FormControl>
            <FormControl margin="normal" required fullWidth>
              <InputLabel>Phonenumber</InputLabel>
              <Input type="number" autoComplete="tel" onChange={this.onNumberChange.bind(this)} />
            </FormControl>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={this.onSubmit.bind(this)}
            >
              Sign up
          </Button>
          </form>
        </Paper>
      </main>
    );
  }
}

Signup.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Signup);
