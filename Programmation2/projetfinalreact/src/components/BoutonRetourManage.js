import React from "react";
import { Row, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../style/details.sass"; /*Modifier ce fichier pour le style en sass*/

//Component pour Le cas d'une page introuvable
function BoutonRetourManage() {
  return (
    <Row>
      <Col className="text-center my-5">
        <Link to="/listetrips" className="btn btn-primary" id="retourRT">
          Retour à la liste des road trips
        </Link>
      </Col>
    </Row>
  );
}
export default BoutonRetourManage;
