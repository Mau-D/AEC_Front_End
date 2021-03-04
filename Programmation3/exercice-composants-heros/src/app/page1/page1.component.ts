import { Component, OnInit } from '@angular/core';
//Importer l'interface hero
import {Hero} from '../hero';
//importer le tableau-mock de trois héros
//import {tableauHeros} from '../mock-heros';
//Importation pour utiliser le service API
import { HeroService } from '../hero.service';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  //Avec l'utilisation du service la variable est initialisé en tableau vide.
  heros: Hero[];
  
  
  constructor(private heroService: HeroService) { }

  ngOnInit(): void {
    //Appelle de la fonction à l'ouverture de la page
    this.getHeros();
  }
  //Fonction qui récupère les données de l'API
  getHeros(): void {
    this.heroService.getHeros()
        .subscribe(resultat => this.heros = resultat);
  }
  //Le void définit une fonction sans return en TS

}
