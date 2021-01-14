import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';


@Component({
  selector: 'app-forfait-mini',
  templateUrl: './forfait-mini.component.html',
  styleUrls: ['./forfait-mini.component.css']
})
export class ForfaitMiniComponent implements OnInit {
  //Inclure la propriété, déclaré dans app pour les valeurs du mock-forfait
  @Input() proprietesForfait: Forfait;
  @Input() description: string;
  //Pour le calcul de la durée du forfait
  @Input() date1: Date = new Date;
  @Input() date2: Date  = new Date;
 
  //Fonction pour le calcul de la durée du forfait
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
