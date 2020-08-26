import React from "react";
import { Affichage } from "./Affichage";
import { Container, Row } from "react-bootstrap";

export class AppelAPI extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }; //Pour l'information demandée à l'API, tableau pour les 10 premiers résultats
  }
  //Ajout de la gestion des erreurs (Try/Catch)
  async componentDidMount() {
    console.log("didmount");
    try {
      const response = await fetch(this.props.lien);
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
    console.log("Appel API");
    console.log("infos" + this.state.data);

    return (
      <Container>
        <Row>
          <Affichage data={this.state.data} />
        </Row>
      </Container>
    );
  }
}
