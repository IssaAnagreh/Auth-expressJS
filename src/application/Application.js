import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import $ from 'jquery';
import SimpleModalWrapped from './Modal.js';

import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';
import CssBaseline from '@material-ui/core/CssBaseline';
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
      name: '',
      download: '1.jpg',
      major: '',
      token: '',
      names: [],
      images: 0
    }
  }

  componentDidMount() {
    console.log('=====in Application=======')
    axios.get('/checkuser')
      .then(res => {
        this.setState({ token: res.data.user })
      })

    axios.get('/images')
      .then(res => {
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
    console.log('uploading')
    axios.post('application/upload', data)
      .then(res => console.log('uploaded!'))
  }

  onChange(event) {
    let file = $('#files')[0].files[0].name
    this.setState({ name: file })
  }

  handleChange = event => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleDownload(event) {
    // console.log('window.location.href', window.location.href)
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
    // console.log('onApply')
  }

  render() {
    const { classes } = this.props;
    // console.log('application: this.state.token', this.state.token)


    if (this.state.token) {
      return (
        <main className={classes.main} >
        <a href='/logout'> Logout</a>
          <CssBaseline />
          <Paper className={classes.paper}>
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
              </label>
              <Button type='submit' className={classes.button}>Send</Button>
            </form>
            <p>{this.state.name}</p>
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
                onClick={this.onApply.bind(this)}
              >
                Apply
            </Button>
            </form>
          </Paper>
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