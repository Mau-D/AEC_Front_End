import { Component, OnInit } from '@angular/core';
//Importations pour le input avec autocomplete
import { FormControl } from '@angular/forms';
import {Observable} from 'rxjs';
import {map, startWith} from 'rxjs/operators';

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
  //Variables associés au input en autocomplete
  myControl = new FormControl();
  myControl2 = new FormControl();
  //Variables des options de l'autocomplete
  options: string[] = ['Cuba', 'Mexique', 'Europe']
  villes: string[] = ['Québec', 'Montréal', 'Toronto']
  //Variables des filtres utilisées pour l'autocomplete, la valeur est changée en tableau de string
  filteredOptions: Observable<string[]>;
  filteredVilles: Observable<string[]>;
  //Variables pour les caractéristiques
  caractHotel: string[]=['Face à la plage', 'Miniclub', 'Près d\'un parc ou milieu naturel', 'Ascenseur', 'Mariage', 'Plage', 'Piscine', 'Restaurants', 'Golf', 'Spa', 'Salle de réunion']

  ngOnInit() {
  //Ces variables prend la valeur entrée dans le champ et fait un map sur le tableau 
    this.filteredOptions = this.myControl.valueChanges.pipe(
        startWith(''),
        map(value => this._filter(value))
      );
      this.filteredVilles = this.myControl2.valueChanges.pipe(
      startWith(""),
      map(value => this._filter2(value))
    );
   
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }
   private _filter2(value: string): string[] {
    const filterValue2 = value.toLowerCase();

    return this.villes.filter(
      ville => ville.toLowerCase().indexOf(filterValue2) === 0
    );
  }
}
