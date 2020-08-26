import React from "react";
import { Row, Col } from "react-bootstrap";
import { NomPays } from "./NomPays";

export class Pays extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], nomPays: [] }; //Pour l'information demandée à l'API et 
  }
  //Ajout de la gestion des erreurs (Try/Catch)
  async componentDidMount() {
    console.log("didmount");
    try {
      const response = await fetch(
        "https://restcountries.eu/rest/v2/all?fields=name"
      );
      const json = await response.json();
      this.setState({ data: json });
      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  render() {
    console.log(this.state.data[0]);

    return (
      <Row>
        <Col>
          <h1>Liste des nom de Pays:</h1>
          {this.state.data.map((key, i) => (
            <NomPays nom={key.name} toutLobjet={key} id={i + 1}></NomPays>
          ))}
        </Col>
      </Row>
    );
  }
}
