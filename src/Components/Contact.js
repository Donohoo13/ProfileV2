import React, { Component } from "react";
import { Container, Modal, Button, ModalHeader, ModalBody, ModalFooter, Card, CardBody, CardImage, CardTitle, CardText } from "mdbreact";

import "./CSS/Contact.css";

class Contact extends Component {
  constructor(props) {
    super(props);
    this.state = {
      modal: false
    };
  }

  toggle = () => {
    this.setState({
      modal: !this.state.modal
    });
  }

  render() {
    return (
      <Card className="contactCard">
        <CardImage
          className="img-fluid"
          src="https://lh3.googleusercontent.com/zbQkGHFAm4Jj9RL7fdKCuY651K9JkYY43JkDv5GBVYSLv98CYcdwOS-_l2It0dVy-8z_9Y7cRaxQRWwB1pUmYJ-33SeJvLH6-I47HJSGDmZS02Ihv7yMJMUD8PVCU7yzpNgb76bZYTFmEiPNrC2xAJE5vui1yHkzOyRHj1lK8y_ZFcAxkYPLZFRidfPDnfYWVfUYyzy6IUwwLkGA31DU50uhjfnEkKwP2m5fdEyB4J6pLRo3r1UTyp-PlYrB09ErBXuIjTxHVhZcmttNsVX73YPWh_iBMVz-_CDgBe9yH7zrtnzfVCOEei54Pv-3oCfwE_oxK8xjKL28nTRDbvEpCWBSorOLU3vfoSYuGBQAXCgNuBvPgqMxrMCp-5k6DmesKAPrXr3umiGr_rDRvi7JNqFx7aislVYDZ4Eo04w_axvtqHXLcYhq-7GwRNIRlWxeekm5raqGQeLH0MUwkLbDchIvyFUNIfTbNv6hN3X27V1VejF0rQjC4Z-9kfLB2SYLTpxeuyWDRGlL99jFed5wE9Fz5szNOPaPUCUycXYV8Sw05NcrPP42z-6hJbY2Khw7PKDdVmNKA7O5lNwMcx5LOlHmzveiEBs6Wfx3RZvBt4zWkuAERfx1I5jzktidSnFRwolqivrxoByvbaAfwlvhAJKdJA=w1186-h790-no"
          waves
        />
        <CardBody>
          <CardTitle>Conner Donohoo</CardTitle>
          <CardTitle className="subTitle">Web Developer</CardTitle>
          <CardText>
            You can contact me through any of the following, highlighted links. You can also  
            <a href="mailto:donohoo13@gmail.com"> email me </a>
            directly.
          </CardText>
          <hr />
          <Container>
        <Button color="green" id="contactModal" onClick={this.toggle}>Contact Me</Button>
        <Modal isOpen={this.state.modal} toggle={this.toggle}>
          <ModalHeader toggle={this.toggle}>Hit me up via email</ModalHeader>
          <ModalBody>
            (...)
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Close</Button>{' '}
            <Button color="primary">Save changes</Button>
          </ModalFooter>
        </Modal>
      </Container>
        </CardBody>
      </Card>
    );
  }
}

export default Contact;
