import React from "react";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import ListGroupItem from "react-bootstrap/ListGroupItem";

//Component Client qui sert à afficher les clients
export class Client extends React.Component {
  //Affiche la card du client dans un col, chacuns des champs est défini par un props
  render() {
    return (
      <Col xs={12} sm={6} md={4} lg={3} xl={2} className="mt-4">
        <Card
          className="mx-auto shadow p-3 mb-5 bg-white rounded"
          style={{ width: "14rem", verticalAlign: "middle" }}
        >
          <Card.Img
            variant="top"
            src={this.props.photo}
            style={{ height: "200px" }}
          />
          <Card.Body className="px-0">
            <Card.Title>{this.props.nom}</Card.Title>
            <Card.Subtitle style={{ fontSize: "0.8rem" }}>
              {this.props.profession}
            </Card.Subtitle>
          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroupItem className="px-0" style={{ fontSize: "0.8rem" }}>
              Courriel: {this.props.courriel}
            </ListGroupItem>
            <ListGroupItem className="px-0" style={{ fontSize: "0.8rem" }}>
              Téléphone: {this.props.tel}
            </ListGroupItem>
            <ListGroupItem className="px-0" style={{ fontSize: "0.8rem" }}>
              Adresse: {this.props.adresse}
            </ListGroupItem>
          </ListGroup>
        </Card>
      </Col>
    );
  }
}
