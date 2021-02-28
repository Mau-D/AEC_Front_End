import React from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
//Component pour la connexion à l'aide d'un mot de passe
export class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //Fonction ajoute un props au composant pour le bouton connexion selon le mot de passe entré
  handleClick() {
    let connecter = false;
    const password = document.getElementById("password").value;
    if (password === "Alibaba") connecter = true;
    else connecter = false;

    this.props.onClick(connecter);
  }
  //Retourne un formulaire pour l'entré du mot de passe
  render() {
    return (
      <Container fluid className="bg hauteur100">
        <Row className="mx-auto text-center">
          <Col sm={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <h1 className="mt-3">Bottin de clients</h1>
            <p>Connexion</p>
          </Col>
        </Row>
        <Row>
          <Col sm={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
            <Form>
              <Form.Group controlId="password">
                <Form.Label>Mot de passe</Form.Label>
                <Form.Control type="password" placeholder="taper Alibaba" />
                <Form.Text className="text-muted">
                  Entrer le mot de passe pour vous connecter
                </Form.Text>
                <Button
                  className="silverButton border-dark"
                  type=""
                  onClick={this.handleClick}
                >
                  Connexion
                </Button>
              </Form.Group>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
