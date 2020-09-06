import React from "react";
import { Col, Card } from "react-bootstrap";
//import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

//Component pour l'affichage des motos dans des cards
function Trip(props) {
  return (
    <Col sm={3} className="mt-5">
      <Fade left cascade>
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src={props.photo} />
          <Card.Body>
            <Card.Title>
              <h2>{props.nomTrip}</h2>
              <h2>Nom du trip</h2>
            </Card.Title>
            <Card.Text>{props.nomAttrait}</Card.Text>
            <Card.Text>{props.endroit}</Card.Text>
            <Card.Text>endroit</Card.Text>
          </Card.Body>
        </Card>
      </Fade>
    </Col>
  );
}
export default Trip;
