import React from 'react';
import './App.css';
import netflixlogo from './images/netflix.png';
import photoMichaelJordan from './images/michaeljordan.jpg';
import photoSteveKerr from './images/kerr.jpg';
import photoBillWennington from './images/wennington.jpg';
import photoScottiePipen from './images/pippen.jpg';
import photoDennisRodman from './images/rodman.jpg';
//Générer un nombre aléatoire de 0 à 4
let nbrAleatoire = Math.floor(Math.random() * Math.floor(5)); 
//Créer un tableau avec tous les joueurs
let joueurs = ['Steve Kerr', 'Michael Jordan', 'Bill Wennington', 'Scottie Pipen', 'Dennis Rodman'];
//Créer un tableau avec les images des joueurs correspondants
let photosJoueurs=[photoSteveKerr, photoMichaelJordan, photoBillWennington, photoScottiePipen, photoDennisRodman];
const longueur = "200px";
//Variable de l'image du joueur choisi par le nombre aléatoire
let imageJoueurAffiche = (
  <img
  id= 'photoJoueur'
  src= {photosJoueurs[nbrAleatoire]}
  alt= {joueurs[nbrAleatoire]}
  height={longueur}
  width={longueur}/>
);
//Variable du nom du joueur choisi par le nombre aléatoire
let nomJoueurAffiche = joueurs[nbrAleatoire];
//création de la liste 1, avec tous les joueurs
let listJoueurs = joueurs.map((nom, i)=><li key={'joueurs'+i}>{nom}</li>);
//Création de la liste 2, sans le joueur affiché par le nombre aléatoire
//Pour la liste 2, pas besoin{} pour les conditions, car je ne suis pas dans un objet JSX
let listJoueurs2 =(
  <div>
    {nbrAleatoire === 0 && <ul><li>Michael Jordan</li><li>Bill Wennington</li><li>Scottie Pipen</li><li>Dennis Rodman</li></ul>}
    {nbrAleatoire === 1 && <ul><li>Steve Kerr</li><li>Bill Wennington</li><li>Scottie Pipen</li><li>Dennis Rodman</li></ul>}
    {nbrAleatoire === 2 && <ul><li>Steve Kerr</li><li>Michael Jordan</li><li>Scottie Pipen</li><li>Dennis Rodman</li></ul>}
    {nbrAleatoire === 3 && <ul><li>Steve Kerr</li><li>Michael Jordan</li><li>Bill Wennington</li><li>Dennis Rodman</li></ul>}
    {nbrAleatoire === 4 && <ul><li>Steve Kerr</li><li>Michael Jordan</li><li>Bill Wennington</li><li>Scottie Pipen</li></ul>}
  </div>
 );

//fonction pour changer de joueur
function ChangerJoueur(){
//Effacer la liste 2 et son titre
document.getElementById('listeACacher').style.display="none";
document.getElementById('titreACacher').style.display="none";
let nbrAleatoire = Math.floor(Math.random() * Math.floor(5)); 
let imgJoueur;
let nomJoueur;
if (nbrAleatoire === 0){
  imgJoueur = photosJoueurs[0];
  nomJoueur = joueurs[0];
}
else if (nbrAleatoire === 1){
  imgJoueur = photosJoueurs[1];
  nomJoueur = joueurs[1];
}
else if (nbrAleatoire === 2){
  imgJoueur = photosJoueurs[2];
  nomJoueur = joueurs[2];
}
else if (nbrAleatoire === 3){
  imgJoueur = photosJoueurs[3];
  nomJoueur = joueurs[3];
}
else {
  imgJoueur = photosJoueurs[4];
  nomJoueur = joueurs[4];
}
let imgJ = document.getElementById("photoJoueur");
let nomJ = document.getElementById("nomAffiche");
imgJ.setAttribute("src", imgJoueur);
nomJ.innerHTML = nomJoueur;
};

//Événement, lors du clic, pour changer de joueur, voir <button>
function App() {
  const texteAfficher=(
    <div>
      <h1>THE LAST DANCE</h1>
      <p>Une production de</p>
      <img src={netflixlogo} alt='Netflix'/>
      <p>Mettant en vedette</p>
      <h2 id='nomAffiche'>{nomJoueurAffiche}</h2>
      {imageJoueurAffiche}
      <h3>Les 5 partants affichés avec MAP()</h3>
      <ul>{listJoueurs}</ul>
      <h3 id="titreACacher">Les 4 partants affichés avec &&</h3>
      <ul id="listeACacher">{listJoueurs2}</ul>
      <button type="button" onClick={ChangerJoueur}>Changer de joueur</button> 
    </div>
  );
  return (
      texteAfficher  
  );
}

export default App;
