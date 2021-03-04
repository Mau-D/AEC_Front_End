import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';
import { VoyagesService } from '../voyages.service'; // service pour API



@Component({
  selector: 'app-forfaits-explorateur',
  templateUrl: './forfaits-explorateur.component.html',
  styleUrls: ['./forfaits-explorateur.component.css']
})
export class ForfaitsExplorateurComponent implements OnInit {
  //variable pour le forfait entier contenant le tableau mock
  forfaits: Forfait[];

  
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
