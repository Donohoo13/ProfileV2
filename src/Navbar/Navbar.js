import React, { Component } from "react";
// import { Router } from 'react-router-dom';

import Routes from "../Routes/Routes";

import "./Navbar.css";
import { Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';

class MainNav extends Component {
  constructor(props) {
      super(props);
      this.state = {
          collapse: false,
      };
      this.onClick = this.onClick.bind(this);
  }

onClick(){
  this.setState({
      collapse: !this.state.collapse,
    });
}

render() {
  // const bgPink = {backgroundColor: '#ec407a'}
    return(
      <div className="nav">
        <Navbar className="mainNav" dark expand="md" scrolling fixed="top">
          <NavbarBrand active href="/">
              <strong>Conner Donohoo</strong>
          </NavbarBrand>
          <NavbarToggler onClick={ this.onClick } />
          <Collapse isOpen = { this.state.collapse } className="dropdown" navbar>
            <NavbarNav left>
              <NavItem>
                  <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/showcase">Showcase</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/resume">Resume</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Contact</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem className="socials">
                <a className="socialIcon" id="firstSocial" target="_blank" rel="noopener noreferrer" href="https://www.facebook.com/Donohoo13"><Fa icon="facebook" /></a>
                <a className="socialIcon" target="_blank" rel="noopener noreferrer" href="https://www.linkedin.com/in/conner-donohoo/"><Fa icon="linkedin" /></a>
                <a className="socialIcon" target="_blank" rel="noopener noreferrer" href="https://github.com/Donohoo13"><Fa icon="github" /></a>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default MainNav;