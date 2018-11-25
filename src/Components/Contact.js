import React, { Component } from "react";
import { Fa, Input, Container, Modal, Button, ModalBody, Card, CardBody, CardImage, CardTitle, CardText } from "mdbreact";

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
          src="https://lh3.googleusercontent.com/4HD82iJYE54t3LRWjHGrRJZcgUlgBkC3do2riCqv0bNmSvD2QYZyAFM0tGMxZMnoKz7OSo1Oy7Dx-wKz6B0ooXT_LhWS6ppCP42K-KrMYMNnYSeTw_uDLRHM5AIzmCod_wLRyCbOQ8RGnTYNjSoDKPEWE_MdA89qx4CyYigLlUqgevRuCBEX6nFb46_w0iYLXnaGsgNUtNcirMjb7Z1jHxbEbAdUa09dJsJGoB7vqCKkid8Ymr3djg8e1itZpUbTZ-quBDaVgU1scRYlWgAoG60yYXquheQdnmYpTB1X6JpM_83_l28iW0Ht62rF1EFsZ17ZIkaP-ZxaQdgsXEUOBzvsYo2jqD95OOngtNpVB1XXVtnxYoXzCpsofkPRJtkEZhAcVb3KEo9AYQ8H0w0aeb288l5wOG0xsMlSRML7sqVPaWMMW_715vik0P5shcfkT31MZMxP_KemwovJJO2dTkyLreaa6nvnTn1Gldzqpkla7vaxvInYWa9DMfAVH1_uk6gI8iDNx2WkWAqB1ACLDHVwzsq9rknrpursDRvzB7Xh_a5SU4fBkLChMxuUF2n-iQsmg4r-wC-JvllcJO6jhiQ9dRNUvOyW60-dW5qeEsN3fRtva6hNQT0izetnaDDQm2AmwzJtpHQu50weGxS2hreo9Q=w1054-h790-no"
          waves
        />
        <CardBody>
          <CardTitle>Conner Donohoo</CardTitle>
          <CardTitle className="subTitle">Web Developer</CardTitle>
          <CardText>
          I'm a young, determined and hard working individual with a great work ethic. 
          I have a strong and savvy customer service background coupled with reliable people skills 
          to help build any workforce. I've been programming for a very short amount of time now, 
          but what I lack in tenure I more than make up for with grit and dedication. 
          You can send me your contact information below and I will get back to you.  Thank you!
          </CardText>
          <hr />
          <Container>
        {/* <Row> */}
            <Button id="contactButton" block size="md" color="black" onClick={this.toggle}>Contact Me</Button>
            <Modal isOpen={this.state.modal} toggle={this.toggle} className="cascading-modal">
              <div className="modal-header green white-text">
                <h4 className="title">
                  <Fa className="fa fa-pencil" /> Contact form</h4>
                <button type="button" className="close" onClick={this.toggle}>
                  <span aria-hidden="true">×</span>
                </button>
              </div>
              <ModalBody className="grey-text">
              <form action="https://formspree.io/donohoo13@gmail.com" method="POST">
                <Input size="sm" label="Your Name" name="name" group type="text" validate error="wrong" success="right"/>
                <Input size="sm" label="Your Email" name="_replyto" group type="email" validate error="wrong" success="right"/>
                <Input size="sm" label="Subject" name="_subject" group type="text" validate error="wrong" success="right"/>
                {/* <input type="hidden" name="_next" value="https://site.io/thanks.html" /> */}
                <Button color="black" id="contactSubmit" type="submit" onClick={this.toggle}>Send Message</Button>
              </form>
              </ModalBody>
            </Modal>
        {/* </Row> */}
      </Container>
        </CardBody>
      </Card>
    );
  }
}

export default Contact;
