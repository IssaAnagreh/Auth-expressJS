/* eslint-disable no-undef */
import React, { Component } from 'react';
import { withRouter } from 'react-router-dom'
import PropTypes from 'prop-types';
import axios from 'axios';
import $ from 'jquery';
import SimpleModalWrapped from './Modal.js';
// import path, { dirname } from 'path';

import Input from '@material-ui/core/Input';
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

class EmployeeApps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      download: '1.jpg',
      major: '',
      token: '',
      names: [],
      images: 0
    }
  }

  componentDidMount() {
    console.log('in Application')
    axios.get('/checkuser')
      .then(res => {
        console.log('res.user', res.data)
        this.setState({ token: res.data.user })
      })

    axios.get('/images')
      .then(res => {
        console.log('res.user', res, __dirname)
        this.setState({
          images: res,
          names: res.data.map(image => {
            return (
              <SimpleModalWrapped name={image} />
            )
          })
        })
      })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    axios.post('application/upload', data)
      .then(res => { console.log('in') })
  }

  onChange(event) {
    let file = $('#files')[0].files[0].name
    this.setState({ name: file })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDownload(event) {
    console.log('window.location.href', window.location.href)
    window.open('http://localhost:8080/download');
    // axios.post('/download')
    //   .then(function (data, status, headers, config) {
    //     $window.open('/download'); //does the download
    //   })
    //   .catch(err => console.log('errrrrrr', err.response))

    // console.log('window.URL.createObjectURL(data);', window.URL.createObjectURL(data))
    // event.preventDefault();
    //   axios.get(`download/${this.state.download}`)
    //   .then(res => {
    //     //$window.open(`download/${this.state.download}`)
    //     console.log('done', res)
    //   })
    //   .catch(err => console.log('errrrrrr', err.response))

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

  onApply() {
    console.log('onApply')
  }

  render() {
    const { classes } = this.props;
    console.log('application: this.props.isAuthed', this.props.isAuthed)
    console.log('application: this.state.token', this.state.token)
    // console.log('application: url', this.props.location


    if (this.state.token) {
      return (
        <main className={classes.main} >
          {this.state.names}
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

EmployeeApps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeeApps);


//action={`http://localhost:8080/application/download/${this.state.download}`}
/*
    <form onSubmit={this.handleDownload.bind(this)}>
    <input type='submit' value="download" />
  </form>

  <Button className={classes.button} onClick={this.handleDownload.bind(this)}>DOWNLOAD</Button>

  <form action={`http://localhost:8080/download/${this.state.download}`}>
    <input type='submit' value="sha3'aal" />
  </form> 
  */