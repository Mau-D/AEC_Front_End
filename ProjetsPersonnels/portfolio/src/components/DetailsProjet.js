import React from "react";
import { Row, Col, Carousel } from "react-bootstrap";
import "../styles/projets.sass";

function DetailsProjet(props) {
  return Number.isInteger(props.id / 2) ? (
    <Row>
      <Col
        xs={{ span: 12, order: 2 }}
        xl={{ span: 5, order: 1 }}
        className="pr-lg-5"
      >
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
      <Col xs={{ span: 12, order: 3 }} xl={{ span: 2, order: 2 }}>
        <div className="bkgnoir m-auto"></div>
      </Col>
      <Col
        xs={{ span: 12, order: 1 }}
        xl={{ span: 5, order: 3 }}
        className="pt-5  font-small"
      >
        <p>{props.details}</p>
      </Col>
    </Row>
  ) : (
    <Row>
      <Col
        xs={{ span: 12, order: 1 }}
        xl={{ span: 5, order: 1 }}
        className="pt-5font-small"
      >
        <p>{props.details}</p>
      </Col>
      <Col xs={{ span: 12, order: 3 }} xl={{ span: 2, order: 2 }}>
        <div className="bkgorange m-auto"></div>
      </Col>
      <Col
        xs={{ span: 12, order: 2 }}
        xl={{ span: 5, order: 3 }}
        className="pl-lg-5"
      >
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
