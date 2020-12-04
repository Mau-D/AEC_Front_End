import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';


@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.css']
})
export class FormulaireRechercheComponent implements OnInit {
//Input et output pour l'échange d'informations
    @Input() description : string;
      @Output() descriptionChange = new EventEmitter();



//Variables des ngModel pour la validation de formulaire
  dateDepart: Date;
  duree: number;
 
  
  //Variables pour les caractéristiques
  caractHotel: string[]=['Face à la plage', 'Miniclub', 'Près d\'un parc ou milieu naturel', 'Ascenseur', 'Mariage', 'Plage', 'Piscine', 'Restaurants', 'Golf', 'Spa', 'Salle de réunion'];
 

  ngOnInit() {
  
   
  }
  change(nouvelleValeur) {
    this.descriptionChange.emit(nouvelleValeur);
  }

}
