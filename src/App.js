import React, { Component } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import "./App.css";

import MainNav from "./Navbar/Navbar";

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <MainNav />
        </div>
      </Router>
    );
  }
}

export default App;
