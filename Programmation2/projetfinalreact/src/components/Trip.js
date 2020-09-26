import React from "react";
import { Card, ListGroup, ListGroupItem } from "react-bootstrap";
import { Link } from "react-router-dom";
import Fade from "react-reveal/Fade";

//Component pour l'affichage des motos dans des cards
function Trip(props) {
  return (
    <Fade left cascade>
      <Card className="bordRose">
        <Card.Img variant="top" src={props.picture1} />
        <Card.Body>
          <Card.Title>
            <Link to={"trip/" + props.nameTrip + "?id=" + props.id}>
              <h2 className="font-medium">{props.nameTrip}</h2>
            </Link>
          </Card.Title>
          <Card.Text>{props.regionTrip}</Card.Text>
        </Card.Body>
        <Card.Header>
          <h3 className="font-medium">Attraits touristiques</h3>
        </Card.Header>
        <ListGroup className="list-group-flush">
          {Object.keys(props.attraitsTrip).map(
            (liste, i) =>
              props.attraitsTrip[liste].nom_attrait !== "" && (
                <ListGroupItem className="font-small" key={"liste" + i}>
                  {props.attraitsTrip[liste].nom_attrait}
                </ListGroupItem>
              )
          )}
        </ListGroup>
      </Card>
    </Fade>
  );
}
export default Trip;
