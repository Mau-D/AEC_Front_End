import React from "react";
import { Col, Card } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

//Component pour l'affichage des motos dans des cards
function Trip(props) {
  return (
    <Col sm={3} className="mt-5">
      <Fade left cascade>
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src={props.picture} />
          <Card.Body>
            <Card.Title>
              <Link to={"trip/" + props.nameTrip + "?id=" + props.id}>
                <h2>Nom du road trip: {props.nameTrip}</h2>
              </Link>
            </Card.Title>
            <Card.Text>attrait principal: {props.nameAttrait}</Card.Text>
            <Card.Text>endroit: {props.city}</Card.Text>
          </Card.Body>
        </Card>
      </Fade>
    </Col>
  );
}
export default Trip;
