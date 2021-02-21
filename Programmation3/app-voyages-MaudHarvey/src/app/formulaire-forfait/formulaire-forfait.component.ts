


  
import { Component, OnInit, Input, Inject } from '@angular/core';
//Importations pour le input avec autocomplete
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';
import { caracTableau } from '../mock-caracHotel';
//Importations pour le dialog
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { Forfait } from '../forfait';
import { ForfaitCompletComponent } from '../forfait-complet/forfait-complet.component';





@Component({
  selector: 'app-formulaire-forfait',
  templateUrl: './formulaire-forfait.component.html',
  styleUrls: ['./formulaire-forfait.component.css']
})

export class FormulaireForfaitComponent implements OnInit {
  //Variables des ngModel pour la validation de formulaire
  nomHotel: string;
  adresse: string;
  nbrChambre: number;
  dateDepart: Date;
  dateRetour: Date;
  prix: number;
  rabais: number;
  caracteristiques: string;
  tableauCarac: string[]=this.selectedForfait.hotel.caracteristiques ;
  //Variables pour afficher les caractéristiques de l'hôtel
  caracHotel: string[]= caracTableau;
  
  
  //Variable pour la date minimum de la date de départ, aujourd'hui
  minDateDepart: Date= new Date;
  minDateRetour: Date= new Date;

  //Variables associés au input en autocomplete, le formControlest utilisé au lieu du ngModel
  destinationControl:FormControl = new FormControl();
  departControl:FormControl = new FormControl();
  
  //Variables des options de l'autocomplete
  destinations: string[] = ['Cuba', "Islande", 'Jamaïque', 'Mexique', 'Paris', 'Thaïlande'  ]
  villes: string[] = ['Montréal', 'Québec', 'Toronto']

  //Variables des filtres utilisées pour l'autocomplete, la valeur est changée en tableau de string
  filteredDestinations: Observable<string[]>;
  filteredVilles: Observable<string[]>;
  
  
 //Fonction pour annuler l'ajout, le dialog ferme
  onAnnulerClick(): void {
    this.dialogRef.close();
  }
  //État initial des checkbox, du forfait sélectionné
  checkState(i){
    let tab: Array<string> = this.tableauCarac;
    console.log("fonction checkState" + this.tableauCarac)
    let index:number = tab.indexOf(i);
      console.log("index" + index);
      console.log("i = " + i);
      if(index != -1){
        console.log("true")
        return true;
    }
    
  }
//Pour les caractéristiques de l'hotel
  changeCaracteristiques(e, valeur) {
    console.log('valeur:' + valeur + 'état: ' + e)
    if(e){
      this.tableauCarac.push(valeur);
    }
    else if(!e){
      const index: number =  this.tableauCarac.indexOf(valeur);
      if (index !== -1) {
        this.tableauCarac.splice(index, 1);
      }   
    }
    console.log(this.tableauCarac)
    return this.newForfait.hotel.caracteristiques = this.tableauCarac;
    
  }
  
  constructor(
    public dialogRef: MatDialogRef<FormulaireForfaitComponent>, 
     public dialogRef2: MatDialogRef<FormulaireForfaitComponent>, 
    
    //Rend accessible la valeur du nouveau forfait au parent
    @Inject(MAT_DIALOG_DATA) public newForfait: Forfait,
     @Inject(MAT_DIALOG_DATA) public selectedForfait: Forfait
    ) {}
   
    
  ngOnInit() {
    
  //Ces variables prend la valeur entrée dans le champ et fait un map sur le tableau 
  //Pour les destinations
    this.filteredDestinations = this.destinationControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
  //Pour les villes de départ
    this.filteredVilles = this.departControl.valueChanges.pipe(
      startWith(""),
      map(value => this._filter2(value))
     
    );
   
  }
   
  //Pour la destination
//Prend la valeur d'entrée, en minuscule
  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();
  //retourne les résultats, modifié en minuscule, qui incluent la valeur d'entrée
    return this.destinations.filter(option => option.toLowerCase().includes(filterValue));
  }
  //Pour la ville de départ
  private _filter2(value: string): string[] {
    const filterValue2 = value.toLowerCase();

    return this.villes.filter(
      ville => ville.toLowerCase().indexOf(filterValue2) === 0
    );
  }
  
}

