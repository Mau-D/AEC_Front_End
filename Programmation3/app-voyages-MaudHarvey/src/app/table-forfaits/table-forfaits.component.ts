import { Component, OnInit, ViewChild, ɵgetHostElement } from '@angular/core';
import { Forfait } from '../forfait';//Interface
import { VoyagesService } from '../voyages.service';//Service
import{ MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau pour l'ajout
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide
import { FormulaireForfaitComponent } from '../formulaire-forfait/formulaire-forfait.component';
import { Hotel } from '../hotel';

@Component({
  selector: 'app-table-forfaits',
  templateUrl: './table-forfaits.component.html',
  styleUrls: ['./table-forfaits.component.css']
})
export class TableForfaitsComponent implements OnInit {
  @ViewChild(MatTable) table:MatTable<any>;

 
//variable des données de l'API
  forfaits: Forfait[];
 //Un tableau contenant la liste des éléments à afficher dans les colonnes
  columnsToDisplay = ['dateDepart','dateRetour','nomHotel','prix', 'actions'];
  //Variable pour l'ajout d'un nouveau forfait
  newForfait: Forfait;
  
 //Variable de l'élément sélectionné
  selectedForfait: Forfait;
 //Ajouter le service dans l'argument du constructeur
  constructor(private voyagesService: VoyagesService, public dialog: MatDialog) { 
    
  }

  ngOnInit(): void {
    //Appelle de la fonction à l'ouverture de la page, importe les infos
    this.getVoyages();
    //Initialise l'objet newForfait
    this.newForfait = {_id: null, destination:'', villeDepart:'', hotel:{nom:'', coordonnees:'', nombreEtoiles:null, nombreChambres:null, caracteristiques:[]}, dateDepartD: null, dateRetourD: null, prix: null, rabais: null, vedette: false};
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
  onAdd(tableForfaits: MatTable<Forfait>, forfaitFormAjout: NgForm) {
    if(forfaitFormAjout.valid) {
      this.voyagesService.addForfait(this.newForfait)
      .subscribe(forfait => { this.forfaits.push(forfait); forfaitFormAjout.resetForm(); tableForfaits.renderRows();});
    }
  }
  //Fonction pour supprimer l'élément
   onDelete(forfait: Forfait): void {
    this.voyagesService.deleteVoyage(forfait._id)
        .subscribe(result => this.forfaits = this.forfaits.filter(f => f !== forfait));
   }
  //Fonction pour l'ouverture du dialog
    //Fonction pour l'ajout lors de la fermeture du dialog, en appuyant sur le crochet

  openDialogNewForfait(): void {
    const dialogRef = this.dialog.open(FormulaireForfaitComponent, {
      width: '80%',
      height: '80%',
      data: {forfait: this.newForfait}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.newForfait = result;
        console.log(this.newForfait);
        console.log('hotel=' + this.newForfait.hotel);
        this.voyagesService.addForfait(this.newForfait)
            .subscribe(forfait  => { this.forfaits.push(forfait); this.newForfait._id = null; this.newForfait.destination=''; this.newForfait.hotel.nom='';this.newForfait.hotel.coordonnees=''; this.newForfait.hotel.nombreEtoiles=null; this.newForfait.hotel.nombreChambres=null; this.newForfait.hotel.caracteristiques=[]; this.newForfait.villeDepart='';  this.newForfait.dateDepartD= null; this.newForfait.dateRetourD= null; this.newForfait.prix= null; this.newForfait.rabais= null; this.newForfait.vedette= false; this.table.renderRows()});
      }
    });
  }
}
