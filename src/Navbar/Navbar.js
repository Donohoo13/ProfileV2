import React, { Component } from "react";
// import { Link } from 'react-router-dom';

import Routes from "../Routes/Routes";

import "./Navbar.css";
import { Container, Navbar, NavbarBrand, NavbarNav, NavbarToggler, Collapse, NavItem, NavLink, Fa } from 'mdbreact';
// import { BrowserRouter as Router } from 'react-router-dom';

class MainNav extends React.Component {
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
          <NavbarBrand href="/">
              <strong>Conner Donohoo</strong>
          </NavbarBrand>
          <NavbarToggler onClick={ this.onClick } />
          <Collapse isOpen = { this.state.collapse } className="dropdown" navbar>
            <NavbarNav left>
              <NavItem active>
                  <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/calculator">Features</NavLink>
              </NavItem>
              <NavItem>
                  <NavLink to="/showcase">Pricing</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="/contact">Options</NavLink>
              </NavItem>
            </NavbarNav>
            <NavbarNav right>
              <NavItem className="socials">
                <NavLink to="#"><Fa icon="facebook" /></NavLink>
                <NavLink to="#"><Fa icon="twitter" /></NavLink>
                <NavLink to="#"><Fa icon="instagram" /></NavLink>
              </NavItem>
              {/* <NavItem>
                <NavLink to="#"><Fa icon="twitter" /></NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#"><Fa icon="instagram" /></NavLink>
              </NavItem> */}
            </NavbarNav>
          </Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}

export default MainNav;