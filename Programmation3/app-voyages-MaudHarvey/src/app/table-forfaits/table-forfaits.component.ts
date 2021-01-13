import { Component, OnInit } from '@angular/core';
import { Forfait } from '../forfait';//Interface
import { VoyagesService } from '../voyages.service';//Service
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau pour l'ajout
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide

@Component({
  selector: 'app-table-forfaits',
  templateUrl: './table-forfaits.component.html',
  styleUrls: ['./table-forfaits.component.css']
})
export class TableForfaitsComponent implements OnInit {
//variable des données de l'API
  forfaits: Forfait[];
 //Un tableau contenant la liste des éléments à afficher dans les colonnes
  columnsToDisplay = ['dateDepart','dateRetour','nomHotel','prix', 'actions'];
 //Variable de l'élément sélectionné
  selectedForfait: Forfait;
 //Ajouter le service dans l'argument du constructeur
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
  //Le void définit une fonction sans return en TS
  //Fonction pour sélectionner l'élément
  onSelect(forfait: Forfait): void {
    this.selectedForfait = forfait;
  }
  //Fonction pour supprimer l'élément
   onDelete(forfait: Forfait): void {
    this.voyagesService.deleteVoyage(forfait._id)
        .subscribe(result => this.forfaits = this.forfaits.filter(f => f !== forfait));
   }
 

}
