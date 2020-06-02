import React from "react";
import FormText from "react-bootstrap/FormText";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
//Component pour afficher un formulaire pour un nouveau client
export class NouveauClient extends React.Component {
  constructor(props) {
    super(props);

    this.handleClick = this.handleClick.bind(this);
  }

  //Props du formulaire et props onClick pour le retour au bottin
  handleClick() {
    const photo = document.getElementById("photoId").value;
    const nom = document.getElementById("nomId").value;
    const profession = document.getElementById("profession").value;
    const courriel = document.getElementById("courriel").value;
    const tel = document.getElementById("tel").value;
    const adresse = document.getElementById("adresse").value;
    this.props.onClick({
      photo: photo,
      nom: nom,
      profession: profession,
      courriel: <a href={"mailto:" + courriel}>{courriel}</a>,
      tel: <a href={"tel:+1-" + tel}>{tel}</a>,
      adresse: adresse,
    });

    return <>{console.log("onClick" + this.props.onClick)}</>;
  }

  render() {
    //Retourne un formulaire pour enregistrer un nouveau client
    return (
      <Container fluid className="bg hauteur100">
        <Row className="align-content-center">
          <Col md={12} lg={6}>
            <h2>Enregistrement d'un nouveau client</h2>
            <Form>
              <Form.Group>
                <FormText>Photo</FormText>
                <Form.Control
                  type="text"
                  placeholder="numéro client"
                  id="photoId"
                />
                <FormText>Nom complet</FormText>
                <Form.Control type="text" placeholder="" id="nomId" />
                <FormText>Profession</FormText>
                <Form.Control type="text" placeholder="" id="profession" />
                <FormText>Courriel</FormText>
                <Form.Control
                  type="text"
                  placeholder="mail@gmail.com"
                  id="courriel"
                />
                <FormText>Téléphone</FormText>
                <Form.Control type="text" placeholder="555-555-5555" id="tel" />
                <FormText>Adresse</FormText>
                <Form.Control
                  type="text"
                  placeholder="No., Nom de la rue"
                  id="adresse"
                />
              </Form.Group>
              <Button
                className="silverButton  border-dark"
                type="submit"
                onClick={this.handleClick}
              >
                Enregistrer
              </Button>
            </Form>
          </Col>
        </Row>
      </Container>
    );
  }
}
