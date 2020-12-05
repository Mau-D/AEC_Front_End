import { Component } from '@angular/core';
import { Forfait } from './forfait';
import { FORFAITS } from './mock-forfaits';
import { Formulaire } from './formulaire';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voyages-MaudHarvey';
  
   //variable pour le forfait entier contenant le tableau mock
  forfaits: Forfait[] = FORFAITS;

  
  //Objet contenant les informations entrées dans le formulaire de recherche
  formulaire :Formulaire = {
    dateDepart: new Date,
    duree: 0,
    nbrEtoiles: 1,
    caracHotel: [''],
  }
  
    
  
}
