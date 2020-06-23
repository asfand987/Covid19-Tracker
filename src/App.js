import React, { useEffect } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

function App() {
  useEffect(() => {
    axios
    .get("https://disease.sh/v2/countries")
    .then(res => {
      console.log(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}, []);

  return (
    <div> 
      <CardDeck>
    <Card bg ="secondary" text="white" className="text-center" style = {{margin: "10px"}}>
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
  <Card bg="danger" text="white" className="text-center" style = {{margin: "10px"}}>
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
  <Card bg="success" text= "white" className="text-center" style = {{margin: "10px"}}>
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
