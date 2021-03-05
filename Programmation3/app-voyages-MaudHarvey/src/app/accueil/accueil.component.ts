import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
//import { FORFAITS } from '../mock-forfaits';
import { Formulaire } from '../formulaire';
import { VoyagesService } from '../voyages.service'; // service pour API

@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
 //variable pour le forfait entier contenant le tableau mock
 //Avec l'utilisation du service la variable est initialisé en tableau vide.
  forfaits: Forfait[];

  //Objet contenant les informations entrées dans le formulaire de recherche
  formulaire :Formulaire = {
    dateDepart: new Date,
    duree: 0,
    nbrEtoiles: 1,
    caracHotel: [''],
  }
  //Ajouter le service dans l'argument du constructeur
  constructor(private voyagesService: VoyagesService) { }

  ngOnInit(): void {
    //Appelle de la fonction à l'ouverture de la page
    this.getVoyages();

  }
//Fonction qui récupère les données de l'API
  getVoyages(): void {
    this.voyagesService.getVoyages()
        .subscribe(resultat => this.forfaits = resultat);
  }
  //Le void définit une fonction sans return en TS

}
