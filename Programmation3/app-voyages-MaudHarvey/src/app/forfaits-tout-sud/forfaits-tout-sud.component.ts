import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';
import { Formulaire } from '../formulaire';


@Component({
  selector: 'app-forfaits-tout-sud',
  templateUrl: './forfaits-tout-sud.component.html',
  styleUrls: ['./forfaits-tout-sud.component.css']
})
export class ForfaitsToutSudComponent implements OnInit {
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
