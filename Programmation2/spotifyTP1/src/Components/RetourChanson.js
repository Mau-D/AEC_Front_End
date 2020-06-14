import React from "react";
import Button from "react-bootstrap/Button";
import Image from "react-bootstrap/Image";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Méthode pour la déconnexion, retour à la page de connexion
export class RetourChanson extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //Méthode pour se déconnecter, événement lors du clic
  handleClick() {
    return this.props.onClick(true);
  }
  render() {
    return (
      <Row className="bgNoir">
        <Col className="mb-5">
          <Button onClick={this.handleClick} id="arrowChanson">
            <Image src={require("../img/arrow.png")} className="arrow" />
            Retour à l'album
          </Button>
        </Col>
      </Row>
    );
  }
}
