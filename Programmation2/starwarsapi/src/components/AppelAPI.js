import React from "react";
import { Personnage } from "./Personnage";
import ListGroupItem from "react-bootstrap/ListGroupItem";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";

export class AppelAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }; //Pour l'information demandée à l'API, tableau pour les 10 premiers résultats
    this.recuperationInfos = this.recuperationInfos.bind(this);
  }
  //Ajout de la gestion des erreurs (Try/Catch)
  async componentDidMount() {
    console.log("didmount");
    try {
      const response = await fetch(this.props.url);
      const json = await response.json();
      this.setState({ data: json });
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }

  recuperationInfos() {
    return (
      <>
        <ListGroup className="list-group-flush" bg="dark">
          {Object.keys(this.state.data).map((key) => (
            <ListGroupItem className="bg-dark" key={key}>
              {key} : {this.state.data[key]}
            </ListGroupItem>
          ))}
        </ListGroup>
      </>
    );
  }

  render() {
    console.log("infos" + this.state.data);

    return (
      <Col xs={12} sm={6} md={4} lg={3} className="mt-4">
        <Personnage data={this.recuperationInfos()} />
      </Col>
    );
  }
}
