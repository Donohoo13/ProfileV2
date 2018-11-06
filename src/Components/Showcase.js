import React, { Component } from 'react';
import { CardGroup, Card, CardHeader, CardBody, CardText, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
import './CSS/Showcase.css'

export default class Showcase extends Component {
  render() {

    return(
      <div>
        <CardGroup deck>
        <Card border="dark" className="mb-3 showcaseCard" style={{maxWidth: '18rem'}}>
  <CardHeader className="cardHeader">Calculator</CardHeader>
  <CardBody>
    <CardText style={{color: 'black'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <CardText small muted className="buildDate">Built October, 2018</CardText><hr/>
    <Link to="/calculator"><Button color="black">Go To</Button></Link>
  </CardBody>
</Card>
<Card border="dark" className="mb-3 showcaseCard" style={{maxWidth: '18rem'}}>
  <CardHeader className="cardHeader">Header</CardHeader>
  <CardBody>
  <CardText style={{color: 'black'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <CardText small muted className="buildDate">Built October, 2018</CardText><hr/>
    <Link to="/"><Button color="black">Home</Button></Link>
  </CardBody>
</Card>
<Card border="dark" className="mb-3 showcaseCard" style={{maxWidth: '18rem'}}>
  <CardHeader className="cardHeader">Header</CardHeader>
  <CardBody>
    <CardText style={{color: 'black'}}>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
    <CardText small muted className="buildDate">Built October, 2018</CardText><hr/>
    <Link to="/"><Button color="black">Home</Button></Link>
  </CardBody>
</Card>
</CardGroup>
      </div>
    );
  }
}