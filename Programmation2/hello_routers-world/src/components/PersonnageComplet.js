import React from "react";
import { CardPersonnage } from "./CardPersonnage";
import { ListGroupItem, ListGroup, Col, Row } from "react-bootstrap";

export class PersonnageComplet extends React.Component {
  constructor(props) {
    super(props);
    this.state = { data: [] }; //Pour l'information demandée à l'API, tableau pour les 10 premiers résultats
    this.recuperationInfos = this.recuperationInfos.bind(this);
  }
  //Ajout de la gestion des erreurs (Try/Catch)
  async componentDidMount() {
    console.log(this.props.match.params.id);
    console.log("didmount");

    try {
      const response = await fetch(
        "https://swapi.dev/api/people/" + this.props.match.params.id + "/"
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
    console.log("matchparam" + this.props.match.params.id);

    return (
      <Row>
        <Col sm={{ span: 6, offset: 3 }} className="mt-4">
          <p>{this.props.location.search}</p>
          <CardPersonnage data={this.recuperationInfos()} />
        </Col>
      </Row>
    );
  }
}

//Component pour l'affichage des informations du personnage
//Il faut appeler de nouveau l'API pour que les informations soient chargés avec l'URL de cette page
/*export class PersonnageComplet extends React.Component {
  render() {
    console.log(this.props.match.params.id + " " + this.props.location.search);
    console.log(this.props);
    return (
      <Row className="text-left">
        <Col>
          <p>{this.props.match.params.id + " " + this.props.location.search}</p>
        </Col>
      </Row>
    );
  }
}*/
