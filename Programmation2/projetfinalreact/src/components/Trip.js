//Créer une card de la fiche détaillée du road trip
import React from "react";
import { Col, Card } from "react-bootstrap";
//import { Link } from "react-router-dom";

//Component pour l'affichage des motos dans des cards
export class Motorcycle extends React.Component {
  render() {
    return (
      <Col sm={3} className="mt-5">
        <Card style={{ width: "28rem" }}>
          <Card.Img variant="top" src={this.props.photo} />
          <Card.Body>
            <Card.Title>
              {/*<Link
                to={"Motorcycle/" + this.props.nomTrip + "?id=" + this.props.id}
              >
                <h2>{this.props.model}</h2>
              </Link>*/}
              <h2>{this.props.nomTrip}</h2>
            </Card.Title>
            <Card.Subtitle className="mb-2 text-muted">
              {this.props.attraits}
            </Card.Subtitle>
            <Card.Text>{this.props.nomAttrait}</Card.Text>
            <Card.Text>{this.props.endroit}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
