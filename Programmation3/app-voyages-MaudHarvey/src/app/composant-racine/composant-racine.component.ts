import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';

@Component({
  selector: 'app-composant-racine',
  templateUrl: './composant-racine.component.html',
  styleUrls: ['./composant-racine.component.css']
})
export class ComposantRacineComponent implements OnInit {
title = 'app-voyages-MaudHarvey';
  //test de méthode
   nomDeLaMethode() {

console.log('Ce texte s’affiche dans la console de votre navigateur! Le titre change aussi!!');
}
  
  //variable pour le forfait entier contenant le tableau mock
  forfaits: Forfait[] = FORFAITS;
  constructor() { }

  ngOnInit(): void {
  }

}
