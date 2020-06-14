import React from "react";
import Dropdown from "react-bootstrap/Dropdown";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

//Méthode pour la déconnexion, retour à la page de connexion
export class Deconnexion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  //Méthode pour se déconnecter, événement lors du clic
  handleClick() {
    this.props.onClick(false);
  }
  render() {
    return (
      <Row className="mb-3">
        <Col xs={{ span: 4, offset: 8 }} className="mt-5">
          <Dropdown>
            <Dropdown.Toggle variant="secondary" id="dropdown-basic">
              Bonjour, {this.props.nom}
            </Dropdown.Toggle>
            <Dropdown.Menu id="deconnexion">
              <Dropdown.Item
                href="#"
                onClick={this.handleClick}
                className="dropdownItem text-light"
              >
                Déconnexion
              </Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Col>
      </Row>
    );
  }
}
