import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';



@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})

export class ForfaitCompletComponent implements OnInit {

  //Inclure la propriété, déclaré dans app pour les valeursdes forfaits
  @Input() proprietesForfait: Forfait;
 
  //Propriété pour les infos inscrites dans le formulaire de recherche
  @Input() formulaire: Formulaire;
  //Pour le calcul de la durée du forfait
  @Input() date1: Date = new Date;
  @Input() date2: Date  = new Date;
  
  //Fonction our le calcul de la durée du forfait

  calculateDiff(depart, retour){
  var depart: any = new Date(this.date1);
  var retour: any = new Date(this.date2);
  var diff: any = Math.floor((retour - depart) / (1000 * 60 * 60 * 24));
  return diff;
}
  
  
  constructor() {
  

   }
  
  ngOnInit(): void {
  }
  
}
