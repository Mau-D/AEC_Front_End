import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";
import { RetourChanson } from "./RetourChanson";
import { Chansons } from "./Chansons";

export class Paroles extends React.Component {
  constructor(props) {
    super(props);
    this.state = { returned: false };
    this.retourAlbum = this.retourAlbum.bind(this);
  }
  retourAlbum(etat) {
    this.setState({ returned: etat });
  }
  render() {
    console.log("texte");
    if (this.state.returned) {
      return (
        <>
          <Chansons
            title={this.props.title}
            album={this.props.album}
            artist={this.props.artist}
            keys={this.props.keys}
            nbrSongs={this.props.nbrSongs}
            during={this.props.during}
          />
        </>
      );
    } else {
      return (
        <>
          <RetourChanson onClick={this.retourAlbum} />
          <Row className="bgNoir">
            <Col xs={12} md={4} className="px-0">
              <Image fluid src={this.props.album} />
            </Col>
            <Col xs={12} md={8} className="text-light">
              <p>ALBUM</p>
              <h2 className="p-3">{this.props.title}</h2>
              <p>CHANSON</p>
              <h3 className="p-3">{this.props.chansonChoisi}</h3>
            </Col>
          </Row>
          <Row className="bgNoir py-5">
            <Col xs={12} className="text-light text-center">
              <hr />
              <p>{this.props.texteChanson}</p>
            </Col>
          </Row>
        </>
      );
    }
  }
}
Paroles.defaultProps = { texteChanson: "Ce contenu n'est pas disponible" };
