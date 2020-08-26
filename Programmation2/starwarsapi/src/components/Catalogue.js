import React from "react";
import { AppelAPI } from "./AppelAPI";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";

//Component pour chercher les informations de l'API
export class Catalogue extends React.Component {
  constructor(props) {
    super(props);
    this.state = { nbr: 1, compteur: [] }; //État pour le nombre de card
    this.multiCard = this.multiCard.bind(this);
  }
  async componentDidMount() {
    let tabTMP = [];
    for (let i = 1; i <= 10; i++) {
      try {
        const response = await fetch("https://swapi.dev/api/people/" + i + "/");
        const reponseDeApi = await response.json();
        tabTMP.push(reponseDeApi);
        this.setState({ donneesRecues: tabTMP });
        if (!response.ok) {
          //Permet d'attraper l'erreur 500 et l'erreur 400
          throw Error(response.statusText);
        }
      } catch (error) {
        //On gère l'erreur
        console.log(error);
      }
    }
  }
  //Méthode pour plusieurs cards
  multiCard() {
    for (var i = 1; i < 11; i++) {
      this.state.compteur.push(i);
    }
    return this.state.compteur.map((i) => (
      <AppelAPI url={"https://swapi.dev/api/planets/" + i + "/"} />
    ));
  }
  //Méthode pour afficher plusieurs Cards
  render() {
    console.log(this.state.nbr);

    return (
      <Container fluid>
        <Row>{this.multiCard()};</Row>
      </Container>
    );
  }
}
