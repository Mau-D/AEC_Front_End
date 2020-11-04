import { Component, OnInit } from '@angular/core';
import {Produit} from '../produit';
import {TABLEAUPRODUITS} from '../mock-produits'
@Component({
  selector: 'app-liste-produits',
  templateUrl: './liste-produits.component.html',
  styleUrls: ['./liste-produits.component.css']
})
export class ListeProduitsComponent implements OnInit {
  //Instanciation de l'objet dans le composant-Parent
//Créer une variable contenant le Mock tableau
produits: Produit[]=TABLEAUPRODUITS;

  //produit1: Produit=TABLEAUPRODUITS[0];
  //produit2: Produit=TABLEAUPRODUITS[1];
  //produit3: Produit=TABLEAUPRODUITS[2];
  //produit4: Produit=TABLEAUPRODUITS[3];
  //produit5: Produit=TABLEAUPRODUITS[4];
  constructor() { }

  ngOnInit(): void {
  }

}
