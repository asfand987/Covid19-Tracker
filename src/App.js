import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './index.css';
import Form from 'react-bootstrap/Form'

function App() {
  const [latest, setLatest] = useState("")
  useEffect(() => {
    axios
    .get("https://disease.sh/v2/countries/united%20kingdom")
    .then(res => {
      setLatest(res.data);
    })
    .catch(err => {
      console.log(err);
    });
}, []);

  return (
    <div> 
      <h1 className="text-center" style = {{margin: "30px"}}>Covid-19 Tracker</h1>
      <h2 className="text-center">United Kingdom</h2>
      <CardDeck>
    <Card bg ="secondary" text="white" className="text-center" style = {{margin: "10px"}}>
    <Card.Body>
      <Card.Title>Cases</Card.Title>
      <Card.Text>
        {latest.cases}
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
      {latest.deaths}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
  <Card bg="warning" text= "white" className="text-center" style = {{margin: "10px"}}>
    <Card.Body>
      <Card.Title>Active</Card.Title>
      <Card.Text>
      {latest.active}
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
      {latest.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>Last updated 3 mins ago</small>
    </Card.Footer>
  </Card>
</CardDeck>
<h2 className="text-center" style = {{margin: "30px"}}>Search Country</h2>
<Form>
  <Form.Group controlId="formBasicEmail">
    <Form.Control type="text" placeholder="Enter country" />
    <Form.Text className="text-muted">
      country
    </Form.Text>
  </Form.Group>
  </Form>
    </div>
  );
}

export default App;
