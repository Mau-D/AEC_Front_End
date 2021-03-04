import { Component, OnInit } from '@angular/core';
//Importer l'interface hero
import {Hero} from '../hero'
//Importer service
import { HeroService } from '../hero.service';


@Component({
  selector: 'app-page2',
  templateUrl: './page2.component.html',
  styleUrls: ['./page2.component.css']
})
export class Page2Component implements OnInit {
 //Variable du tableau de héros
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