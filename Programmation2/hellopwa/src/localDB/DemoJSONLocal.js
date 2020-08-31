import React from "react";
console.log("DemoJSONLocal");

function DemoJSONLocal() {
  test();

  return <h1>Liste des motos adventures</h1>;
}

function test() {
  //OUVERTURE DE LA BD

  let json = require("./db.json");

  console.log("AFFICHER");

  //READ, on pourrait aussi prendre un for traditionnel comme en bas

  json.adventuremotorcycles.forEach(readMoto);
  //fonction readMoto
  function readMoto(moto) {
    console.log(moto.modele);
  }

  //AJOUT

  json.adventuremotorcycles.push({
    id: 11,
    modele: "DUKE",
    fabricant: "KAWASAKI",
    picture: "https://www.igoa-moto.fr/images/joomlart/features/demo-4.png",

    specifications: [
      {
        description: "Test",
      },

      {
        prix: "1000000",
      },
    ],
  });

  console.log("AJOUTER");

  json.adventuremotorcycles.forEach(readMoto);

  //MODIFIER

  for (var i = 0; i < json.adventuremotorcycles.length; i++) {
    if (json.adventuremotorcycles[i].id === 11) {
      json.adventuremotorcycles[i].modele = "Modèle de la mort";

      break;
    }
  }

  console.log("MODIFIER");

  json.adventuremotorcycles.forEach(readMoto);

  //SUPRESSION

  for (var j = 0; j < json.adventuremotorcycles.length; j++) {
    if (json.adventuremotorcycles[j].id === 11) {
      json.adventuremotorcycles.splice(j);

      break;
    }
  }

  console.log("SUPRESSION");

  json.adventuremotorcycles.forEach(readMoto);

  //Le problème avec cette approche est que c'est non persistant. Les sécurités des navigateurs ne permettent pas d'écrire dans un fichier côté client.
}

export default DemoJSONLocal;
