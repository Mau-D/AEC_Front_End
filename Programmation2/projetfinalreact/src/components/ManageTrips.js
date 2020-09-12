import React, { useState, useEffect } from "react";
import Trip from "./Trip";
import BoutonAjoutTrip from "./BoutonAjoutTrip";
import { Container, Row, Col, Image } from "react-bootstrap";
import { API } from "../constantes";

//Remplacer la class par une fonction
//L'état(donneesRecues) et la méthode pour changer l'état(setDonneesRecues)
//La valeur par défaut est dans le useState(un tableau vide)
function ManageTrip() {
  const [donneesRecues, setDonneesRecues] = useState([]);

  //Pour le CRUD utiliser useEffect
  useEffect(() => {
    //appelle la fonction getMotorcycles
    getTrip();
  }, []); //Si on enlève le second paramètre, on obtient une boucle infinie, indique quelle constante à vérifier
  //Changer le componentDidMount par une fonction
  async function getTrip() {
    try {
      const response = await fetch(API);
      const reponseDeApi = await response.json();
      setDonneesRecues(reponseDeApi);
      if (!response.ok) {
        //Permet d'attraper l'erreur 500 et l'erreur 400
        throw Error(response.statusText);
      }
    } catch (error) {
      //On gère l'erreur
      console.log(error);
    }
  }

  return (
    <Container fluid>
      <h1>Affichage de la liste des road trips</h1>

      <Row>
        {donneesRecues.map((key, i) => (
          <Trip
            picture={key.image1}
            nameTrip={key.nom}
            nameAttrait={key.attraits.nom_attrait}
            cityAttrait={key.attraits.ville}
            id={key._id}
          ></Trip>
        ))}
      </Row>
      <Row>
        <Col>
          <BoutonAjoutTrip />
        </Col>
      </Row>
    </Container>
  );
}
//Il faut exporter les fonctions
export default ManageTrip;
