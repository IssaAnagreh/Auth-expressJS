/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import $ from 'jquery';

import Avatar from '@material-ui/core/Avatar';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import { withStyles } from '@material-ui/core/styles';
import InputLabel from '@material-ui/core/InputLabel';
import MenuItem from '@material-ui/core/MenuItem';
import FormControl from '@material-ui/core/FormControl';
import Select from '@material-ui/core/Select';

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
  button: {
    margin: theme.spacing.unit,
  },
  input: {
    display: 'none',
  },
  rightIcon: {
    marginLeft: theme.spacing.unit,
  },
  root: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  formControl: {
    margin: theme.spacing.unit,
    minWidth: 120,
  },
  selectEmpty: {
    marginTop: theme.spacing.unit * 2,
  },
});

class Application extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '2.jpg',
      download: '1.jpg',
      major: '',
      token: ''
    }
  }

  componentWillMount() {
    axios.get('/home', { withCredentials: true })
      .then(res => {
        console.log('res.user', res.data)
        if (res.user) {
          this.setState({ token: res.user })
        }
      })
  }

  handleSubmit(event) {
    const data = new FormData(event.target);
    axios.post('application/upload', data)
      .then(res => console.log('in'))
  }

  onChange(event) {
    let file = $('#files')[0].files[0].name
    this.setState({ name: file })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  render() {
    const { classes } = this.props;
    console.log('application: this.props.isAuthed',this.props.isAuthed)
    console.log('application: this.state.token', this.state.token)
    if (this.props.isAuthed) {
      return (
        <main className={classes.main} >
          <CssBaseline />
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Application
        </Typography>

            <form onSubmit={this.handleSubmit}
              onChange={this.onChange.bind(this)}>
              <input id="files" name="files" type="file" className={classes.input} />
              <label htmlFor="files">
                <Button variant="contained" color="default" component="span" className={classes.button} >
                  Choose file
              </Button>
                <p>{this.state.name}</p>
              </label>
              <Button type='submit' className={classes.button}>Send</Button>

            </form>

            <p>Do you have an account? if not <span><a href="/signup">Register</a></span> now.</p>
            <p><span><a href="#">Forgot</a></span> your password?</p>
            <form action={`http://localhost:8080/application/download/${this.state.download}`}>
              <input type='submit' />
            </form>
          </Paper>
          <form className={classes.root} autoComplete="off">
            <FormControl className={classes.formControl}>
              <InputLabel>Major</InputLabel>
              <Select
                value={this.state.major}
                onChange={this.handleChange}
                inputProps={{
                  name: 'major',
                  id: 'major-simple',
                }}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value={'Medical Doctor'}>Medical Doctor</MenuItem>
                <MenuItem value={'Nurse'}>Nurse</MenuItem>
                <MenuItem value={'Pharmasist'}>Pharmasist</MenuItem>
                <MenuItem value={'Ray technician'}>Ray technician</MenuItem>
              </Select>
            </FormControl>
          </form>
        </main>
      );
    } else {
      return (
        <div>
          not authorized
      </div>
      )
    }

  }
}

Application.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(Application);
