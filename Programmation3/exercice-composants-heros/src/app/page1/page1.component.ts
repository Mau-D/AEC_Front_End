import { Component, OnInit } from '@angular/core';
//importer le tableau-mock de trois héros
import {tableauHeros} from '../mock-heros';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  //Créer cette variable pour utiliser le ngFor
  monTableau: string[] = tableauHeros;
  //Créer les variables à partir du tableau-mock
  //hero1 = tableauHeros[0];
  //hero2 = tableauHeros[1];
  //hero3 = tableauHeros[2];
  
  constructor() { }

  ngOnInit(): void {
  }

}
