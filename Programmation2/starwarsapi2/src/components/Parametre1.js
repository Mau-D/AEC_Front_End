import React from "react";
import { Container, Form, Col } from "react-bootstrap";
import { Recherche } from "./Recherche";

export class Parametre1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [], valeur: "", choosen: false };
    this.handleChange = this.handleChange.bind(this);
  }

  //Ajout de la gestion des erreurs (Try/Catch)
  async componentDidMount() {
    try {
      const response = await fetch("https://swapi.dev/api/");

      const json = await response.json();

      this.setState({ data: json });

      if (!response.ok) {
        throw Error(response.statusText);
      }
    } catch (error) {
      console.log(error);
    }
  }
  //Méthode pour récupérer la sélection dans le menu déroulant des paramètres 1
  handleChange(e) {
    const valeur = e.target.value;
    this.setState({ valeur: valeur });
    this.setState({ choosen: true });
  }
  render() {
    if (this.state.choosen) {
      return <Recherche data={this.state.data} selection={this.state.valeur} />;
    }

    return (
      <Container>
        <Form.Row>
          <Form.Group as={Col}>
            <Form.Label>Choisir une catégorie</Form.Label>
            <Form.Control
              as="select"
              inputRef={(el) => (this.inputEl = el)}
              onChange={this.handleChange}
            >
              <option value="" selected></option>
              {Object.keys(this.state.data).map((key) => (
                <option key={key} value={key}>
                  {key}
                </option>
              ))}
            </Form.Control>
          </Form.Group>
        </Form.Row>
      </Container>
    );
  }
}
