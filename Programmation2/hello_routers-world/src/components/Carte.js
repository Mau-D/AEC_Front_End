import React from "react";
import { Row, Col } from "react-bootstrap";
//Component affichant la carte google
export class Carte extends React.Component {
  render() {
    return (
      <Row className="text-center">
        <Col>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d85139.94628177199!2d-69.7533023072231!3d48.17534062698083!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4cbfd5c05f904ecb%3A0x1343833432cb9559!2sTadoussac%2C%20QC!5e0!3m2!1sfr!2sca!4v1593701756424!5m2!1sfr!2sca"
            width="600"
            height="450"
            frameborder="0"
            allowfullscreen=""
            aria-hidden="false"
            tabindex="0"
            title="iframeCarte"
          ></iframe>
        </Col>
      </Row>
    );
  }
}
