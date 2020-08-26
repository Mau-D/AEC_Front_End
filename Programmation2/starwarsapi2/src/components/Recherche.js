import React from "react";
import { Form, Button, Row, Col } from "react-bootstrap";
import { AppelAPI } from "./AppelAPI";

//Composant pour la recherche selon la catégorie choisie
export class Recherche extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      lien: "",
      clicked: false,
      donneesRecues: [],
      numeroName: null,
    };
    this.handleClick = this.handleClick.bind(this);
  }
  async componentDidMount() {
    let tabTMP = [];
    for (let i = 1; i <= 10; i++) {
      try {
        const response = await fetch(
          "https://swapi.dev/api/" + this.props.selection + "/" + i + "/"
        );
        const reponseDeApi = await response.json();
        tabTMP.push(reponseDeApi.name);
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

  handleClick() {
    console.log("Cliqué");
    let name = document.getElementById("recherche").value;
    console.log("nomEcrit" + name);

    this.state.donneesRecues.map((value, i) => {
      console.log("nom du tableau" + value);
      if (value === name) {
        let numero = i + 1;
        let lienURL =
          "https://swapi.dev/api/" + this.props.selection + "/" + numero + "/";

        this.setState({ lien: lienURL });
        this.setState({ clicked: true });
      }
    });
  }

  /*this.setState({ numeroName: numero });
    let name = document.getElementById("recherche").value;
    let lienURL =
      "https://swapi.dev/api/" + this.props.selection + "/" + numeroName + "/";
    this.setState({ lien: lienURL });
    this.setState({ clicked: true });*/

  render() {
    console.log("parametre1= " + this.props.selection);
    console.log("donneesRecues" + this.state.donneesRecues);
    console.log("numero" + this.state.numeroName);
    console.log("lien" + this.state.lien);
    if (this.state.clicked) {
      return (
        <>
          <AppelAPI lien={this.state.lien} />
        </>
      );
    } else {
      return (
        <>
          <Row>
            <Col>
              {" "}
              <Form>
                <Form.Group>
                  <Form.Label>
                    {"Rechercher dans " + this.props.selection}
                  </Form.Label>
                  <Form.Control type="text" id="recherche"></Form.Control>
                </Form.Group>
              </Form>
              <Button type="submit" onClick={this.handleClick}>
                Rechercher
              </Button>
            </Col>
          </Row>
        </>
      );
    }
  }
}
