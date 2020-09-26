import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";

//Fonction pour le bouton d'ajout d'un road trip
function BoutonAjouterTrip() {
  return (
    <Row>
      <Col className="text-center mb-3">
        <Link
          to="/ajoutertrip"
          className="btn btn-primary font-medium"
          id="ajoutRT"
        >
          Ajouter un Road Trip
        </Link>
      </Col>
    </Row>
  );
}
//Il faut exporter les fonctions
export default BoutonAjouterTrip;
