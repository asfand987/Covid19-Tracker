import React, { useEffect, useState } from 'react';
import Card from 'react-bootstrap/Card';
import CardDeck from "react-bootstrap/CardDeck"
import 'bootstrap/dist/css/bootstrap.min.css';
import axios from "axios";
import './index.css';
import Form from 'react-bootstrap/Form';
import CardColumns  from "react-bootstrap/CardColumns";


function App() {
  const [latest, setLatest] = useState([]);
  const [results, setResults] = useState([]);
  const [searchCountry, setSearchCountry] = useState("");

  useEffect(() => {
    axios
    .all([
      axios.get("https://disease.sh/v2/countries/united%20kingdom"),
      axios.get("https://disease.sh/v2/countries")
    ])
    .then(responseArr => {
      setLatest(responseArr[0].data);
      setResults(responseArr[1].data);
    })
    .catch(err => {
      console.log(err);
    });
}, []);

const countries = results.map((data, i) => {
  return (
    <Card
    key = {i}
      bg="light"
      text="dark"
      className="text-center" 
      style = {{margin: "10px"}}
      >
        <Card.Img variant="top" src={data.countryInfo.flag} />
        <Card.Body>
          <Card.Title>{data.country}</Card.Title>
          <Card.Text>Cases: {data.cases}</Card.Text>
          <Card.Text>Deaths: {data.deaths}</Card.Text>
          <Card.Text>Active: {data.active}</Card.Text>
          <Card.Text>Recovered: {data.recovered}</Card.Text>
        </Card.Body>
      </Card>
  );
});

const date = new Date(parseInt(latest.updated));
const lastUpdated = date.toString();

const filterCountry = results.filter(item => {
  return item.country === searchCountry
});


const showCountry = filterCountry.map((data, i) => {
  return (   
    <CardDeck>
    <Card bg ="secondary" text="white" className="text-center" style = {{margin: "10px"}}>
    <Card.Body> 
    <Card.Title>Cases</Card.Title>
      <Card.Text>
        {data.cases}
      </Card.Text>
    </Card.Body>
</Card>
<Card bg="danger" text="white" className="text-center" style = {{margin: "10px"}}>
  <Card.Body>
    <Card.Title>Deaths</Card.Title>
    <Card.Text>
    {data.deaths}
    </Card.Text>
  </Card.Body>

</Card>
<Card bg="warning" text= "white" className="text-center" style = {{margin: "10px"}}>
  <Card.Body>
    <Card.Title>Active</Card.Title>
    <Card.Text>
      {data.active}
    </Card.Text>
  </Card.Body>

</Card>
<Card bg="success" text= "white" className="text-center" style = {{margin: "10px"}}>
  <Card.Body>
    <Card.Title>Recovered</Card.Title>
    <Card.Text>
      {data.recovered}
    </Card.Text>
  </Card.Body>

</Card>
</CardDeck>
  );
});

const getName = filterCountry.map((data, i) => {
  return data.country
});
/* Fucntion to return flag of country which has been searched
const showFlag = filterCountry.map((data, i) => {
  return data.countryInfo.flag
});
*/
  return (
    <div > 
      <h1 className="text-center" style = {{margin: "20px"}}>Covid-19 Tracker</h1>
      <p className="text-center">Made by Asfand Khan</p>
      <h2 className="text-center" style = {{margin: "20px"}}>United Kingdom</h2>
      <CardDeck>
      <Card bg ="secondary" text="white" className="text-center" style = {{margin: "10px"}}>
      <Card.Body>
      <Card.Title>Cases</Card.Title>
        <Card.Text>
          {latest.cases}
        </Card.Text>
      </Card.Body>
    <Card.Footer>
      <small>{lastUpdated}</small>
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
      <small>{lastUpdated}</small>
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
      <small>{lastUpdated}</small>
    </Card.Footer>
  </Card>
  <Card bg="success" text= "white" className="text-center" style = {{margin: "10px"}}>
    <Card.Body>
      <Card.Title>Recovered</Card.Title>
      <Card.Text>
        {latest.recovered}
      </Card.Text>
    </Card.Body>
    <Card.Footer>
      <small>{lastUpdated}</small>
    </Card.Footer>
  </Card>
</CardDeck>
<h2 className="text-center" style = {{margin: "30px"}}>Search Country</h2>
<Form>
  <Form.Group controlId="countrySearch">
    <Form.Control
      type="text"
      placeholder="Enter country"
      onChange = {e => setSearchCountry(e.target.value)}
      />
  </Form.Group>
  </Form>
  {/*  To show case country flag when a country is searched
  <Card.Img variant="top" src={showFlag} margin="10px" height="400"/> */}
  <h2 className="text-center" margin="10px">{"Covid-19 Data For: " + getName}</h2>
  <Card>{showCountry}</Card>
  <h2 className="text-center" style = {{margin: "30px"}}>List Of All Countries With Covid-19</h2>
  <CardColumns>{countries}</CardColumns>
    </div>
  );
}

export default App;
