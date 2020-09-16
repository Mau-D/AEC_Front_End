import React from "react";
import { Col, Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

//Component pour l'affichage des motos dans des cards
function Trip(props) {
  return (
    <Col sm={4} className="mt-5">
      <Fade left cascade>
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src={props.picture1} />
          <Card.Body>
            <Card.Title>
              <Link to={"trip/" + props.nameTrip + "?id=" + props.id}>
                <h2>{props.nameTrip}</h2>
              </Link>
            </Card.Title>
            <Card.Text>
              <h5>{props.regionTrip}</h5>
            </Card.Text>
          </Card.Body>
          <Card.Header>
            <h3>Attraits touristiques</h3>
          </Card.Header>
          <ListGroup className="list-group-flush">
            {Object.keys(props.attraitsTrip).map((key) => (
              <ListGroupItem>
                {props.attraitsTrip[key].nom_attrait}
              </ListGroupItem>
            ))}
          </ListGroup>
        </Card>
      </Fade>
    </Col>
  );
}
export default Trip;
