import { Component, OnInit, Input } from '@angular/core';
import {Produit} from '../produit';
//Dans le composant-enfant inclure l'objet de l'interface
//Ajouter Input de Angular
@Component({
  selector: 'app-fiche-produit',
  templateUrl: './fiche-produit.component.html',
  styleUrls: ['./fiche-produit.component.css']
})
export class FicheProduitComponent implements OnInit {
  //Appeler la variable créé dans le template du composant parent
  //Associer à l'objet de l'interface
   @Input()proprietesProduit: Produit;

  constructor() { }

  ngOnInit(): void {
  }

}
