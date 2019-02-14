import React, { Component } from 'react'
import axios from 'axios'
import './Signup.css';
import Button from '@material-ui/core/Button';
import Icon from '@material-ui/core/Icon';
import Input from '@material-ui/core/Input';
import TextField from '@material-ui/core/TextField';
import FormControl from '@material-ui/core/FormControl';


export default class signup extends Component {
  constructor(props) {
    super(props);
    this.state = {
      reg: {
        major: '',
        name: '',
        email: '',
        password: '',
      }
    };
  }

  componentDidMount() {
  }

  onSubmit() {
    const scope = this;
    axios.post('http://localhost:8080/register', { major: 'hsdfs' })
      .then(function (res) {
        console.log('9a77')
      })
  }

  render() {
    const img = 'goo.gl/Crn8wf';
    return (
      <div className='body'>

        <div className='regBlock'>
          <p>Regestration: </p>
          <TextField id="text" type="text" required />
          <Button required={true} onClick={this.onSubmit}> Submit </Button>

        </div>


      </div>
    )
  }
}
