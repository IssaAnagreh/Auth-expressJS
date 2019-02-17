import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import $ from 'jquery';
import SimpleModalWrapped from './Modal.js';
import ManagerUsers from './Manageruser.js';

import { withStyles } from '@material-ui/core/styles';


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

class ManagerApps extends Component {
  constructor(props) {
    super(props)
    this.state = {
      name: '',
      users: [],
      major: '',
      token: '',
      names: [],
      images: 0
    }
  }

  componentDidMount() {
    console.log('========in ManagerApps=======')
    axios.get('/checkuser')
      .then(res => {
        if (res.data.name === 'manager-manager'){
          this.setState({ token: res.data.user })
        }
      })

    axios.get('/images')
      .then(res => {
        this.setState({
          images: res,
          names: res.data.map(image => {
            return (
              <SimpleModalWrapped key={image} name={image} />
            )
          })
        })
      })

      axios.get('/newusers/manager')
      .then(res => {
        this.setState({
          users: res.data
        })
      })
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = new FormData(event.target);
    axios.post('application/upload', data)
      .then(res => { })
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
    console.log('application: this.state.token', this.state.token)
    // console.log('application: url', this.props.location


    if (this.state.token) {
      return (
        <main className={classes.main} >
        <a href='/logout'> Logout</a>
          {this.state.names}
          {this.state.users.map(user =>
            <ManagerUsers key={user.email} user={user}/>
          )}
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

ManagerApps.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManagerApps);


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