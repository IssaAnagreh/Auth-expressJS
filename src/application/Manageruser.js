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

class ManagerUsers extends Component {
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
        console.log('=======APPROVE======', this.props.user.email)
        axios.post('/approve/manager', {email: this.props.user.email})
            .then(res => {
                console.log('done')
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

ManagerUsers.propTypes = {
    classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(ManagerUsers);


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