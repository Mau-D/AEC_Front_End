import React from "react";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

//Component pour l'affichage des motos dans des cards
function Trip(props) {
  return (
    <Col
      sm={4}
      className="my-5 d-flex flex-wrap align-content-center justify-content-start"
    >
      <Fade left cascade>
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src={props.picture1} />
          <Card.Body>
            <Card.Title>
              <Link to={"trip/" + props.nameTrip + "?id=" + props.id}>
                <h2>{props.nameTrip}</h2>
              </Link>
            </Card.Title>
            <Card.Text>{props.regionTrip}</Card.Text>
          </Card.Body>
          <Card.Header>
            <h3>Attraits touristiques</h3>
          </Card.Header>
          <ListGroup className="list-group-flush">
            {Object.keys(props.attraitsTrip).map((liste, i) => (
              <ListGroupItem key={"liste" + i}>
                {props.attraitsTrip[liste].nom_attrait}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card>
      </Fade>
    </Col>
  );
}
export default Trip;
