import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

//Composant pour afficher un album
export class Album extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hovered: false };
    this.handleClick = this.handleClick.bind(this);
    this.onMouseOut = this.onMouseOut.bind(this);
    this.onMouseOver = this.onMouseOver.bind(this);
  }
  //Méthode qui créé un props lors du clic, changera l'état dans Catalogue
  handleClick() {
    this.props.onClick(true);
    this.props.infos({
      title: this.props.titre,
      album: this.props.image,
      artist: this.props.artiste,
      keys: this.props.keys,
      nbrSongs: this.props.nbrChansons,
      during: this.props.duree,
    });
  }
  //Méthode onMouseOver, change l'état de hovered à true
  //Méthode onMouseOut, change l'état de hoverd à false
  onMouseOver() {
    this.setState({ hovered: true });
  }
  onMouseOut() {
    this.setState({ hovered: false });
  }
  //Retourne une Card de l'album, événement clic sur l'image des albums, événement hover
  render() {
    return (
      <Col xs={12} sm={6} lg={4} className="my-4 px-4">
        <Card style={{ border: "none" }} id="carte">
          <Card.Img
            variant="top"
            src={this.props.image}
            alt={this.props.alt}
            style={{
              height: "25vh",
              opacity: `${this.state.hovered ? "0.3" : "1"}`,
            }}
            onClick={this.handleClick}
            onMouseOver={this.onMouseOver} //événement qui appelle la fonction
            onMouseOut={this.onMouseOut} //événement qui appelle la fonction
          />
          <div>
            <Image
              fluid
              className="px-5 py-5"
              src={require("../img/play.png")}
              style={{
                position: "absolute",
                top: "0",
                bottom: "0",
                left: "0",
                right: "0",
                height: "25vh",
                width: "90%",
                opacity: `${this.state.hovered ? "1" : "0"}`,
              }}
              onClick={this.handleClick}
              onMouseOver={this.onMouseOver} //événement qui appelle la fonction
              onMouseOut={this.onMouseOut} //événement qui appelle la fonction
            />
          </div>
          <Card.Body>
            <Card.Title className="ct">{this.props.titre}</Card.Title>
            <Card.Text>{this.props.artiste}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    );
  }
}
