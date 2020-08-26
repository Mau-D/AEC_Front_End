import React from "react";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

//Component pour l'affichage de la photo, voir component GaleriePhotos
export class Photos extends React.Component {
  render() {
    return (
      <Col xs={3} className="my-3">
        <Image
          fluid
          src={this.props.src}
          alt={this.props.alt}
          title={this.props.title}
          rounded
        />
      </Col>
    );
  }
}
