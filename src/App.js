import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";

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
    </div>
  );
}

export default App;
