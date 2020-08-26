import React from "react";
import { Container, Row, Col } from "react-bootstrap";
//Component avec une video youtube
export class Video extends React.Component {
  render() {
    return (
      <Container>
        <Row className="text-center">
          <Col>
            <iframe
              width="1195"
              height="672"
              src="https://www.youtube.com/embed/tip2N9YjvWs"
              frameborder="0"
              allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
              title="iframeVideo"
            ></iframe>
          </Col>
        </Row>
      </Container>
    );
  }
}
