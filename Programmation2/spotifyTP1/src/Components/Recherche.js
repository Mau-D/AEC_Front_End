import React from "react";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";

//Méthode pour la recherche, dans le nom de l'album et de l'artiste
export class Recherche extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //Méthode pour créer un props avec la valeur Form.Control et changer l'état(Catalogue), pour l'affichage des résultats
  handleClick() {
    //Variables du champ de recherche
    const search = document.getElementById("recherche").value;

    this.props.onClick(true);
    this.props.recherche(search);
  }
  render() {
    return (
      <Row className="bgNoir pt-5 text-center">
        <Col sm={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Rechercher un album"
                id="recherche"
              />
            </Form.Group>
            <Form.Group>
              <Button
                type="button"
                variant="secondary"
                size="lg"
                onClick={this.handleClick}
              >
                Rechercher
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    );
  }
}
