import React, { Component } from "react";
import {
  Container,
  Navbar,
  NavbarBrand,
  NavbarNav,
  NavbarToggler,
  Collapse,
  NavItem,
  NavLink,
  Dropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem
} from "mdbreact";
import { BrowserRouter as Router, Link } from "react-router-dom";

import Routes from "../Routes/Routes";

import "./Navbar.css";

export default class MainNav extends Component {
  constructor(props) {
    super(props);
    this.state = {
      collapse: false,
      isWideEnough: false
    };
    this.onClick = this.onClick.bind(this);
  }

  onClick() {
    this.setState({
      collapse: !this.state.collapse
    });
  }
  render() {
    return (
      <div>
        <Navbar color="indigo" dark expand="md" scrolling>
          <NavbarBrand>
            <strong>Conner Donohoo</strong>
          </NavbarBrand>
          {!this.state.isWideEnough && <NavbarToggler onClick={this.onClick} />}
          <Collapse isOpen={this.state.collapse} navbar>
            <NavbarNav right>
              <NavItem active>
                <NavLink to="/">Home</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Not Sure</NavLink>
              </NavItem>
              <NavItem>
                <NavLink to="#">Contact</NavLink>
              </NavItem>
            </NavbarNav>
          </Collapse>
        </Navbar>
        <Routes />
      </div>
    );
  }
}
