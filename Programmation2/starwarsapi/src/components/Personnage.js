import React from "react";
import Card from "react-bootstrap/Card";

export class Personnage extends React.Component {
  render() {
    console.log("personnage");
    return (
      <Card
        border="primary"
        bg="dark"
        className="mx-auto shadow p-3 mb-5  text-white rounded"
        style={{ width: "25rem", verticalAlign: "middle" }}
      >
        <Card.Img
          variant="top"
          src={require("../img/r2d2.jpg")}
          style={{ height: "300px" }}
        />

        {this.props.data}
      </Card>
    );
  }
}
