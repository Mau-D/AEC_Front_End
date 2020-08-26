import React from "react";
import { Row, Col } from "react-bootstrap";
import { Perso } from "./Perso";

//Component pour l'affichage d'une liste de 10 personnages venant d'un API
export class ListePersonnages extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }; //Pour l'information demandée à l'API, tableau pour les 10 premiers résultats
  }
  //Ajout de la gestion des erreurs
  async componentDidMount() {
    let tabTMP = [];
    for (let i = 1; i <= 10; i++) {
      try {
        const response = await fetch("https://swapi.dev/api/people/" + i + "/");
        const reponseDeApi = await response.json();
        tabTMP.push(reponseDeApi);
        this.setState({ data: tabTMP });
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
  render() {
    return (
      <Row>
        <Col>
          <h1>Liste des personnages:</h1>
          {this.state.data.map((key, i) => (
            <Perso nom={key.name} toutLobjet={key} id={i + 1}></Perso>
          ))}
        </Col>
      </Row>
    );
  }
}
