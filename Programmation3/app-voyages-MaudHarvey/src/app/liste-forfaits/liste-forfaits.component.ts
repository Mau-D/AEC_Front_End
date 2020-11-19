import { Component, OnInit } from '@angular/core';
///Importations de l'interface et du tableau mock
import { Forfait } from '../forfait';
import { ForfaitCompletComponent } from '../forfait-complet/forfait-complet.component';



import {FORFAITS } from '../mock-forfaits'


@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  //variable pour le forfait entier contenant le tableau mock
forfaits: Forfait[] = FORFAITS;


//variable pour les caractéristiques de l'hôtel
//caracteristiquesHotel: Hotel[];
  constructor() { }
  
  ngOnInit(): void {
  }

}
