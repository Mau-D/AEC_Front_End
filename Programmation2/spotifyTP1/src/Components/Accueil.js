import React from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Image from "react-bootstrap/Image";

import { Connexion } from "./Connexion";
import { Catalogue } from "./Catalogue";
import { Deconnexion } from "./Deconnexion";

//Composant affiche la bonne page lors de la connexion, vérifier les valeurs entrées
export class Accueil extends React.Component {
  constructor(props) {
    super(props);
    this.state = { connected: false, etatNom: "" };
    this.verificateur = this.verificateur.bind(this);
    this.changeEtat = this.changeEtat.bind(this);
    this.changeNom = this.changeNom.bind(this);
  }
  //Méthode pour changer l'état de connecter
  changeEtat(etat) {
    this.setState({ connected: etat });
  }
  //Méthode pour enregistrer le nom de l'usager
  changeNom(nom) {
    this.setState({ etatNom: nom });
  }

  //Méthode pour valider le nom et le mot de passe
  verificateur() {
    if (this.state.connected) {
      return (
        <>
          <Container fluid id="catalogue">
            <Deconnexion onClick={this.changeEtat} nom={this.state.etatNom} />
            <Row className="text-center">
              <Col xs={12}>
                <h1 className="mt-3 large text-primary">
                  <span className="rouge">Q</span>c
                  <span className="jaune">M</span>u
                  <span className="vert">S</span>i
                  <span className="violet">K</span>
                  <Image src={require("../img/qc.png")} className="qc pl-2" />
                </h1>
              </Col>
            </Row>
            <Catalogue />
            <Row>
              <Col>
                <p className=" text-light">
                  Grâce à la participation du Gouvernement du Québec
                  <Image src={require("../img/qc.png")} className="qc pl-2" />
                </p>
              </Col>
            </Row>
          </Container>
        </>
      );
    } else {
      return (
        <Container fluid className="my-5" id="connexion">
          <Row className="text-center">
            <Col xs={12}>
              <h1 className="mt-3 large  text-primary">
                <span className="rouge">Q</span>c
                <span className="jaune">M</span>u<span className="vert">S</span>
                i<span className="violet">K</span>
                <Image src={require("../img/qc.png")} className="qc pl-2" />
              </h1>
              <p className="text-light">Spotify québécois</p>
            </Col>
          </Row>
          <Connexion onClick={this.changeEtat} nom={this.changeNom} />
        </Container>
      );
    }
  }

  render() {
    return this.verificateur();
  }
}
