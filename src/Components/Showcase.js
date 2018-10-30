// import React, { Component } from 'react';

// class Showcase extends Component {
//     render() {

//         return(
//             <div>
//                 Showcase page works!
//             </div>
//         );
//     }
// }

// export default Showcase;

import React, { Component } from "react";
import {
  Container,
  Button,
  Card,
  CardBody,
  CardImage,
  CardTitle,
  CardText
} from "mdbreact";
import './CSS/Showcase.css';
import { Link } from 'react-router-dom';
import Routes from '../Routes/Routes';

class Showcase extends Component {
  render() {
    return (
      <Container className="cards">
        <Card className="card">
          <CardImage
            className="img-fluid"
            src="https://www.ebuyer.com/blog/wp-content/uploads/2014/07/buttons-on-a-calculator-header1.jpg"
          />
          <CardBody>
            <CardTitle>Calculator</CardTitle>
            <CardText>
              This was a simple functioning calculator I built with React.
            </CardText>
            <Button Link to="/calculator">View</Button>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button href="#">Button</Button>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button href="#">Button</Button>
          </CardBody>
        </Card>
        <Card className="card">
          <CardImage
            className="img-fluid"
            src="https://mdbootstrap.com/img/Photos/Others/images/43.jpg"
          />
          <CardBody>
            <CardTitle>Card title</CardTitle>
            <CardText>
              Some quick example text to build on the card title and make up the
              bulk of the card's content.
            </CardText>
            <Button href="#">Button</Button>
          </CardBody>
        </Card>
        {/* <Routes/> */}
      </Container>
    );
  }
}

export default Showcase;
