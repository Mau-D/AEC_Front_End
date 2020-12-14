import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';
import { Formulaire } from '../formulaire';
@Component({
  selector: 'app-accueil',
  templateUrl: './accueil.component.html',
  styleUrls: ['./accueil.component.css']
})
export class AccueilComponent implements OnInit {
 //variable pour le forfait entier contenant le tableau mock
  forfaits: Forfait[] = FORFAITS;

  
  //Objet contenant les informations entrées dans le formulaire de recherche
  formulaire :Formulaire = {
    dateDepart: new Date,
    duree: 0,
    nbrEtoiles: 1,
    caracHotel: [''],
  }
  constructor() { }

  ngOnInit(): void {
  }

}
