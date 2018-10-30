import React, { Component } from 'react';
import './App.css';

import MainNav from './Navbar/Navbar'

class App extends Component {
  render() {
    return (
      <div className="App">
        <h1>Profile</h1>
        <MainNav/>
      </div>
    );
  }
}

export default App;
