import React, { useState, useEffect } from "react";
import Trip from "./Trip";
import BoutonAjoutTrip from "./BoutonAjoutTrip";
import { Container, Row, Col } from "react-bootstrap";
import { API } from "../constantes";
import "../style/liste.sass"; /*Modifier ce fichier pour le style en sass*/

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
    <Container fluid className="my-5 " id="liste">
      <h1 className="font-xlarge text-center">Liste des road trips</h1>
      <BoutonAjoutTrip />
      <Row id="listCards" className="p-5">
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
      </Row>
    </Container>
  );
}
//Il faut exporter les fonctions
export default ManageTrip;
