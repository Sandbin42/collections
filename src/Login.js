import React, { Component } from 'react';
import * as firebase from 'firebase';
import './index.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      emailInput: '',
      passInput: ''
    }

    this.handleEmail = this.handleEmail.bind(this);
    this.handlePass = this.handlePass.bind(this);
    this.handleLogin = this.handleLogin.bind(this);
    this.handleCreate = this.handleCreate.bind(this);
  }

  handleEmail(event) {
    this.setState({
      emailInput: event.target.value
    })
  }

  handlePass(event) {
    this.setState({
      passInput: event.target.value
    })
  }

  handleLogin(event) {
    event.preventDefault();
    firebase.auth().signInWithEmailAndPassword(this.state.emailInput, this.state.passInput);
  }

  handleCreate(event) {
    event.preventDefault();
    firebase.auth().createUserWithEmailAndPassword(this.state.emailInput, this.state.passInput);
  }

  render() {
    return(
      <form className='login-form'>
        <input id='userEmail' type='text' value={this.state.emailInput} onChange={this.handleEmail} placeholder='email'/>
        <input id='userPassword' type='text' value={this.state.passInput} onChange={this.handlePass} placeholder='password' />
        <button id='btnLogin' onClick={this.handleLogin}>
          Log In
        </button>
        <button id='btnSignUp' onClick={this.handleCreate}>
          Sign Up
        </button>
        <button id='btnLogout' className='hidden'>
          Log Out
        </button>
      </form>
    )
  }
}

export default Login;
