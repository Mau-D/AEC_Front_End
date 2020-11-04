//Tableau mock pour 5 produits, tableau-objet

//Importer l'interface produit.ts
import { Produit } from './produit';
//Créer le tableau-objet

export const TABLEAUPRODUITS: Produit[] = [
    { id: 'abc', nom: 'vélo', description:'Bicyclette de la mort à deux roues', prix: 2000, image: './assets/img/mountain-bike.jpg', qteStock: 0},
    { id: 'def', nom: 'moto', description:'Moto super débile écoeurante', prix: 10000, image: './assets/img/bike.jpg', qteStock: 30},
    { id: 'ghi', nom: 'bateau', description:'Bateau supersonique', prix: 50000, image: './assets/img/boat.jpg', qteStock: 13},
    { id: 'jkl', nom: 'voiture', description:'Voiture la plus rapide au monde', prix: 60000, image: './assets/img/car.jpg', qteStock: 1},
    { id: 'mno', nom: 'trottinette', description:'Trotti freestyle', prix: 250, image: './assets/img/scooter.jpg', qteStock: 5},
];
