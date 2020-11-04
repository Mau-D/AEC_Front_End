import { Component, OnInit } from '@angular/core';
//importer le tableau-mock de trois héros
import {tableauHeros} from '../mock-heros';

@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
  //Créer cette variable pour utiliser le ngFor
  monTableau: string[] = tableauHeros;
//Créer les variables à partir du tableau-mock
  //hero1 = tableauHeros[0];
  //hero2 = tableauHeros[1];
  //hero3 = tableauHeros[2];
  //Autres variables
  hero4 = 'Ironman';
  hero5 = 'Hulk';

  constructor() { }

  ngOnInit(): void {
  }

}
