import React from "react";
import Card from "react-bootstrap/Card";

export class CardPersonnage extends React.Component {
  render() {
    return (
      <Card
        border="primary"
        bg="dark"
        className="p-3 mb-5  text-white rounded mx-auto"
        style={{ width: "25rem", verticalAlign: "middle" }}
      >
        {this.props.data}
      </Card>
    );
  }
}
