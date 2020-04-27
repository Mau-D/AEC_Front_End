import React from 'react';
import './App.css';
import netflixlogo from './images/netflix.png';
import photoMichaelJordan from './images/michaeljordan.jpg';
import photoSteveKerr from './images/kerr.jpg';
import photoBillWennington from './images/wennington.jpg';
import photoScottiePipen from './images/pippen.jpg';
import photoDennisRodman from './images/rodman.jpg';

let nbrAleatoire = Math.floor(Math.random() * 4); 
let joueurs = ['Steve Kerr', 'Michael Jordan', 'Bill Wennington', 'Scottie Pipen', 'Dennis Rodman'];
let photosJoueurs=[photoSteveKerr, photoMichaelJordan, photoBillWennington, photoScottiePipen, photoDennisRodman];
const longueur = "200px";
let imageJoueurAffiche = (
  <img
  src= {photosJoueurs[nbrAleatoire]}
  alt= {joueurs[nbrAleatoire]}
  height={longueur}
  width={longueur}/>
);
let nomJoueurAffiche = joueurs[nbrAleatoire];
let listJoueurs = joueurs.map((nom, i)=><li key={'joueurs'+i}>{nom}</li>);
let listJoueurs2 = [];//Faire la deuxième liste
function App() {
  const texteAfficher=(
    <div>
      <h1>THE LAST DANCE</h1>
      <p>Une production de</p>
      <img src={netflixlogo} alt='Netflix'/>
      <p>Mettant en vedette</p>
      <h2>{nomJoueurAffiche}</h2>
      {imageJoueurAffiche}
      <h3>Les 5 partants affichés avec MAP()</h3>
      <ul>{listJoueurs}</ul>
      <h3>Les 4 partants affichés avec &&</h3>
      <ul>{listJoueurs2}</ul>
    </div>
  );
  return (
      texteAfficher  
  );
}

export default App;
