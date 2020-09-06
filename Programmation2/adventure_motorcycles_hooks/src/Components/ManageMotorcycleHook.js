import React, { useState, useEffect } from "react";
import MotorcycleHook from "./MotorcycleHook";
import { Container, Row } from "react-bootstrap";
import ScrollReveal from "scrollreveal";

//Remplacer la class par une fonction
//L'état(donneesRecues) et la méthode pour changer l'état(setDonneesRecues)
//La valeur par défaut est dans le useState(un tableau vide)
function ManageMotorcycleHook() {
  const [donneesRecues, setDonneesRecues] = useState([]);

  //Pour le CRUD utiliser useEffect
  useEffect(() => {
    //appelle la fonction getMotorcycles
    getMotorcycles();
  }, donneesRecues); //Si on enlève le second paramètre, on obtient une boucle infinie, indique quelle constante à vérifier
  //Changer le componentDidMount par une fonction
  async function getMotorcycles() {
    try {
      const response = await fetch(
        "http://localhost:3001/adventuremotorcycles"
      );
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
  ScrollReveal().reveal(".headline");
  ScrollReveal().reveal(".tagline", { delay: 500 });
  ScrollReveal({ duration: 5000 });
  ScrollReveal().reveal(".punchline", { delay: 2000 });

  return (
    <Container fluid>
      <h1 className="headline">Affichage de la liste des motos</h1>
      <p class="tagline">
        The perfect widgets.
        <span className="punchline">Forever.</span>
      </p>
      <h1>Affichage de la liste des motos</h1>
      <Row>
        {donneesRecues.map((key, i) => (
          <MotorcycleHook
            photo={key.photo}
            model={key.modele}
            factory={key.fabricant}
            key={key.modele + key.id}
            description={key.specifications[0].description}
            prix={key.specifications[1].prix}
            id={key.id}
          ></MotorcycleHook>
        ))}
      </Row>
    </Container>
  );
}
//Il faut exporter les fonctions
export default ManageMotorcycleHook;
