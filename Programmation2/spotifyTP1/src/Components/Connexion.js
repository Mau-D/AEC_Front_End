import React from "react";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

//Méthode pour la connexion avec un nom d'usager et un mot de passe
export class Connexion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //Méthode lors du clic de la connexion, changera l'état du composant Accueil pour afficher la bonne page
  //props handleClick et props nomUtilisateur et MotDePasse
  handleClick() {
    //Variables pour les champs du formulaire
    var userName = document.getElementById("nomUtilisateur").value;
    var password = document.getElementById("motDePasse").value;
    var etatConnexion = false;
    //Récupérer le nom de l'usager
    this.props.nom(userName);
    //vérifier si le nom et le mot de passe, entrer la valeur dans le props onClick
    if (userName === "shany" && password === "patate") {
      etatConnexion = true;
    } else {
      etatConnexion = false;
    }
    this.props.onClick(etatConnexion);
  }

  //Retourne un formulaire de connexion et un événement clic
  render() {
    return (
      <Row className="text-center">
        <Col sm={{ span: 10, offset: 1 }} md={{ span: 6, offset: 3 }}>
          <Form>
            <Form.Group>
              <Form.Control
                type="text"
                placeholder="Nom d'utilisateur"
                id="nomUtilisateur"
                className="my-5"
              />
            </Form.Group>
            <Form.Group>
              <Form.Control
                type="password"
                placeholder="Mot de passe"
                id="motDePasse"
                className="my-5"
              />
            </Form.Group>
            <Form.Group>
              <Button
                type="reset"
                className="btn-dark"
                onClick={this.handleClick}
              >
                SE CONNECTER
              </Button>
            </Form.Group>
          </Form>
        </Col>
      </Row>
    );
  }
}
