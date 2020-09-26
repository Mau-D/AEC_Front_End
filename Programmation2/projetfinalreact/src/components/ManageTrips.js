import React, { useState, useEffect } from "react";
import Trip from "./Trip";
import BoutonAjoutTrip from "./BoutonAjoutTrip";
import { Container, Row, CardColumns } from "react-bootstrap";
import { API } from "../constantes";
import "../style/liste.sass";

//Afficher les road trips
function ManageTrip() {
  const [donneesRecues, setDonneesRecues] = useState([]);

  //Pour le CRUD utiliser useEffect
  useEffect(() => {
    //appelle la fonction getMotorcycles
    getTrip();
  }, []);

  /*Va chercher les infos dans la bd */
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
    <Container fluid className="my-5" id="liste">
      <h1 className="font-xlarge text-center">Liste des road trips</h1>
      <BoutonAjoutTrip />

      <Row id="listCards" className="p-lg-5 d-flex flex-wrap  bigGray">
        <CardColumns className="mx-auto responsiveCard">
          {donneesRecues.map((infos, i) => (
            <Trip
              picture1={infos.image1}
              nameTrip={infos.nom}
              descriptionTrip={infos.description}
              regionTrip={infos.region}
              attraitsTrip={infos.attraits}
              key={"manage" + i}
              id={infos._id}
            ></Trip>
          ))}
        </CardColumns>
      </Row>
    </Container>
  );
}
//Il faut exporter les fonctions
export default ManageTrip;
