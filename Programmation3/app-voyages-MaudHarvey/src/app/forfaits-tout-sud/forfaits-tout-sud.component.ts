import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { Formulaire } from '../formulaire';
import { VoyagesService } from '../voyages.service'; // service pour API



@Component({
  selector: 'app-forfaits-tout-sud',
  templateUrl: './forfaits-tout-sud.component.html',
  styleUrls: ['./forfaits-tout-sud.component.css']
})
export class ForfaitsToutSudComponent implements OnInit {
  //variable pour le forfait entier contenant le tableau mock
  forfaits: Forfait[];

  //Objet contenant les informations entrées dans le formulaire de recherche
  formulaire :Formulaire = {
    dateDepart: new Date,
    duree: 0,
    nbrEtoiles: 1,
    caracHotel: [''],
  }
 constructor(private voyagesService: VoyagesService) { }

  ngOnInit(): void {
    //Appelle de la fonction à l'ouverture de la page
    this.getVoyages();

  }
  //Fonction qui récupère les données de l'API
  getVoyages(): void {
    this.voyagesService.getVoyages()
        .subscribe(resultat => this.forfaits = resultat);
  }

}
