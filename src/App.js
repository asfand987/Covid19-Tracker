import React from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck"
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <div> 
      <CardDeck>
    <Card bg ="secondary" text="white">
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
        100
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="danger" text="white">
    <Card.Body>
      <Card.Title>Deaths</Card.Title>
      <Card.Text>
        500
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="success" text= "white">
    <Card.Body>
      <Card.Title>Recoveries</Card.Title>
      <Card.Text>
        300
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
    </div>
  );
}

export default App;
