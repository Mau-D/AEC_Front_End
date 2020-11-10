import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import "../styles/projets.sass";

function DetailsProjet(props) {
  return Number.isInteger(props.id / 2) ? (
    <Row>
      <Col xs={12} xl={5} className="pr-lg-5">
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
      <Col>
        <div className="bkgnoir m-auto"></div>
      </Col>
      <Col xs={12} xl={5} className="p-5 font-small">
        <p>{props.details}</p>
      </Col>
    </Row>
  ) : (
    <Row>
      <Col xs={12} xl={5} className="p-5 font-small">
        <p>{props.details}</p>
      </Col>
      <Col>
        <div className="bkgorange m-auto"></div>
      </Col>
      <Col xs={12} xl={5} className="pl-lg-5">
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
    </Row>
  );
}
export default DetailsProjet;
