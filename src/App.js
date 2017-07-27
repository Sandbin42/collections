import React, { Component } from 'react';
import logo from './Collections_logo_basic.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </div>
        <p className="App-intro">
          This is where all the magic will live!
        </p>
      </div>
    );
  }
}

export default App;
