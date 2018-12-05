import React, { Component } from 'react';
import { CardGroup, Card, CardHeader, CardBody, CardText, Button } from 'mdbreact';
import { Link } from 'react-router-dom';
import './CSS/Showcase.css'

export default class Showcase extends Component {
  render() {

    return(
      <div>
        <CardGroup deck className="showcaseCards">
        <Card border="dark" className="mb-3 showcaseCard" style={{maxWidth: '18rem'}}>
  <CardHeader className="cardHeader">Calculator</CardHeader>
  <CardBody>
    <CardText style={{color: 'black'}}>A basic calculator app built using React and npm with MathJS.</CardText>
    <CardText small muted className="buildDate">Finished October, 2018</CardText><hr/>
    <Link to="/calculator"><Button color="black">Go To</Button></Link>
  </CardBody>
</Card>
<Card border="dark" className="mb-3 showcaseCard" style={{maxWidth: '18rem'}}>
  <CardHeader className="cardHeader">Team This Store</CardHeader>
  <CardBody>
  <CardText style={{color: 'black'}}>A 4 team fullstack project built using Angular.</CardText>
    <CardText small muted className="buildDate">Finished November, 2018</CardText><hr/>
    <a href="https://team-this-store.netlify.com/" target="_blank" rel="noopener noreferrer">
    <Button color="black">Go to</Button>
    </a>
  </CardBody>
</Card>
<Card border="dark" className="mb-3 showcaseCard" style={{maxWidth: '18rem'}}>
  <CardHeader className="cardHeader">BookCase</CardHeader>
  <CardBody>
    <CardText style={{color: 'black'}}>A personal full stack CRUD application built with React, Micro, and MongoDB to track books.</CardText>
    <CardText small muted className="buildDate">Finished December, 2018</CardText><hr/>
    <a href="https://books-tracker.netlify.com/" target="_blank" rel="noopener noreferrer">
    <Button color="black">Go To</Button>
    </a>
  </CardBody>
</Card>
{/* <Card border="dark" className="mb-3 showcaseCard" style={{maxWidth: '18rem'}}>
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
</Card> */}
</CardGroup>
      </div>
    );
  }
}