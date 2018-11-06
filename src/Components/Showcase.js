import React, { Component } from 'react';
import { CardGroup, Card, CardHeader, CardBody, CardTitle, CardText, Button } from 'mdbreact';

export default class Showcase extends Component {
  render() {

    return(
      <div>
        <CardGroup deck>
        <Card style={{width: '22rem'}}>
  <CardHeader color="deep-orange lighten-1">Featured</CardHeader>
  <CardBody>
    <CardTitle>Special title treatment</CardTitle>
    <CardText>With supporting text below as a natural lead-in to additional content.</CardText>
    <Button color="deep-orange">go somewhere</Button>
  </CardBody>
</Card>
<Card border="light" className="mb-3" style={{maxWidth: '18rem'}}>
  <CardHeader>Header</CardHeader>
  <CardBody>
    <CardTitle tag="h5">Light card title</CardTitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  </CardBody>
</Card>
<Card border="dark" className="mb-3" style={{maxWidth: '18rem'}}>
  <CardHeader>Header</CardHeader>
  <CardBody className="text-dark">
    <CardTitle tag="h5">Dark card title</CardTitle>
    <CardText>Some quick example text to build on the card title and make up the bulk of the card's content.</CardText>
  </CardBody>
</Card>
</CardGroup>
      </div>
    );
  }
}