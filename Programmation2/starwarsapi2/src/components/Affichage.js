import React from "react";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Card from "react-bootstrap/Card";

export class Affichage extends React.Component {
  constructor(props) {
    super(props);
    this.recuperationInfos = this.recuperationInfos.bind(this);
  }

  recuperationInfos() {
    return (
      <>
        <ListGroup className="list-group-flush" bg="dark">
          {Object.keys(this.props.data).map((key) => (
            <ListGroupItem className="bg-dark" key={key}>
              {key} : {this.props.data[key]}
            </ListGroupItem>
          ))}
        </ListGroup>
      </>
    );
  }

  render() {
    return (
      <Col sm={{ span: 6, offset: 3 }} className="mt-4 mx-auto text-center">
        <Card
          border="primary"
          bg="dark"
          className="shadow p-3 mb-5  text-white rounded d-inline-block text-justify"
          style={{ width: "25rem", verticalAlign: "middle" }}
        >
          {this.recuperationInfos()}
        </Card>
      </Col>
    );
  }
}
