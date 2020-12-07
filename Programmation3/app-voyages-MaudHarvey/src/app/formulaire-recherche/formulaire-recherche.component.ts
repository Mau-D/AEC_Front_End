import { Component, Input, Output, EventEmitter, OnInit } from '@angular/core';
import { Formulaire } from '../formulaire';
import { dureeTableau } from '../mock-durees';
import { caracTableau } from '../mock-caracHotel';
import {DateAdapter, MAT_DATE_FORMATS, MAT_DATE_LOCALE} from '@angular/material/core';




@Component({
  selector: 'app-formulaire-recherche',
  templateUrl: './formulaire-recherche.component.html',
  styleUrls: ['./formulaire-recherche.component.css']
})

export class FormulaireRechercheComponent implements OnInit {
//Input et output pour l'échange d'informations
  @Input() formulaire: Formulaire;
  @Output() formulaireChange = new EventEmitter();

  //Variable pour le mock tableau des durées
 dureeTableau: Array<number> = dureeTableau;


//Variables des ngModel pour la validation de formulaire
  dateDepart: Date;
  duree: number;
  nbrEtoiles: number;
  
//Variable pour la date minimum de la date de départ, aujourd'hui
  minDateDepart: Date= new Date;
 
//Variables pour les caractéristiques
  caracHotel: string[] = caracTableau;


  ngOnInit() {
  
   
  }
 
  //Pour la date de départ
  changeDateDepart(nouvelleValeur) {
    let nouveauFormulaire : Formulaire =  {dateDepart: nouvelleValeur, 
                                            duree : this.formulaire.duree, 
                                            nbrEtoiles:this.formulaire.nbrEtoiles,
                                            caracHotel:this.formulaire.caracHotel,
                                          };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }
  //Pour la durée
  changeDuree(nouvelleValeur) {
    let nouveauFormulaire : Formulaire =  {dateDepart: this.formulaire.dateDepart, 
                                            duree : nouvelleValeur, 
                                            nbrEtoiles:this.formulaire.nbrEtoiles,
                                            caracHotel:this.formulaire.caracHotel,
                                          };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }
  //Pour le nombre d'étoiles
  changeNbrEtoiles(nouvelleValeur) {
    let nouveauFormulaire : Formulaire =  {dateDepart: this.formulaire.dateDepart, 
                                            duree : this.formulaire.duree, 
                                            nbrEtoiles:nouvelleValeur,
                                            caracHotel:this.formulaire.caracHotel,
                                          };
    this.formulaire = nouveauFormulaire;
    this.formulaireChange.emit(nouveauFormulaire);
  }
 
}
