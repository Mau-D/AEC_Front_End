import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';



@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})

export class ForfaitCompletComponent implements OnInit {

  //Inclure la propriété, déclaré dans app pour les valeurs du mock-forfait
  @Input() proprietesForfait: Forfait;
  //Propriété pour les infos inscrites dans le formulaire de recherche
  @Input() formulaire: Formulaire;
  
  
  
  constructor() {
  

   }
  
  ngOnInit(): void {
  }
  
}
