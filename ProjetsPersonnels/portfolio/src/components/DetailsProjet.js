import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";

function DetailsProjet(props) {
  return (
    <Row>
      <Col xs={4}>
        <Carousel>
          <Carousel.Item interval={1000}>
            <img className="d-block w-100" src={props.image} alt="Main slide" />
          </Carousel.Item>
          <Carousel.Item interval={1000}>
            <img
              className="d-block w-100"
              src={props.carousel1}
              alt="First slide"
            />
          </Carousel.Item>
          <Carousel.Item interval={500}>
            <img
              className="d-block w-100"
              src={props.carousel2}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src={props.carousel3}
              alt="Third slide"
            />
          </Carousel.Item>
        </Carousel>
      </Col>
      <Col xs={8}>
        {props.details}
        <br></br>
        <a href={props.lien}>{props.lien}</a>
      </Col>
    </Row>
  );
}
export default DetailsProjet;
