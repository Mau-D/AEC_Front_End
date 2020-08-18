import React from "react";
import { Motorcycle } from "./Motorcycle";
import { Container, Row } from "react-bootstrap";

export class ManageMotorcycle extends React.Component {
  constructor(props) {
    super(props);
    this.state = { donneesRecues: [] };
  }

  //Ajout de la gestion des erreurs
  //Adresse du server(3001) avec le nom de la base de données

  async componentDidMount() {
    try {
      const response = await fetch(
        "http://localhost:3001/adventuremotorcycles"
      );
      const reponseDeApi = await response.json();
      this.setState({ donneesRecues: reponseDeApi });
      if (!response.ok) {
        //Permet d'attraper l'erreur 500 et l'erreur 400
        throw Error(response.statusText);
      }
    } catch (error) {
      //On gère l'erreur
      console.log(error);
    }
  }

  async specscomponentDidMount() {
    try {
      const response = await fetch(
        "http://localhost:3001/adventuremotorcycles"
      );
      const reponseDeApi = await response.json();
      this.setState({ donneesRecues: reponseDeApi });
      if (!response.ok) {
        //Permet d'attraper l'erreur 500 et l'erreur 400
        throw Error(response.statusText);
      }
    } catch (error) {
      //On gère l'erreur
      console.log(error);
    }
  }
  render() {
    console.log(this.state.donneesRecues);
    return (
      <Container fluid>
        <h1>Affichage de la liste des motos</h1>
        <Row>
          {this.state.donneesRecues.map((key, i) => (
            <Motorcycle
              photo={key.photo}
              model={key.modele}
              factory={key.fabricant}
              key={key.modele + key.id}
              description={key.specifications[0].description}
              prix={key.specifications[1].prix}
              id={i + 1}
            ></Motorcycle>
          ))}
        </Row>
      </Container>
    );
  }
}
