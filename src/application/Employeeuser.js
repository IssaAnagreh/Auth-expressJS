/* eslint-disable no-undef */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';

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

class EmployeeUsers extends Component {
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
  }

  approve() {
    axios.post('/approve/employee', { email: this.props.user.email })
      .then(res => {
      })
  }


  render() {

    return (
      <>
        <p>{this.props.user.email} , {this.props.user.firstName} , {this.props.user.lastName} , {this.props.user.major} </p>
        <button onClick={this.approve.bind(this)}> approve</button>
      </>
    )

  }
}

EmployeeUsers.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(EmployeeUsers);


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