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
    axios.post('/register', scope.state.reg)
      .then(function (res) {
        // scope.setState({
        //   workers: res.data
        // })
      })
  }

  render() {
    const img = 'goo.gl/Crn8wf';
    return (
      <div className='body'>

        <img className='regIMG' src="https://www.useoftechnology.com/wp-content/uploads/2014/07/healthcare-technology-1068x713.jpg" alt="new" />
        <div className='regBlock'>
          <p>Regestration: </p>
          <TextField id="text" type="text" required />
          <Button required={true}> Submit </Button>

        </div>


      </div>
    )
  }
}
