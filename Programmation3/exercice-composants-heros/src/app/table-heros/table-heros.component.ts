import { Component, OnInit, ViewChild } from '@angular/core';
import { Hero } from '../hero';//Interface
import { HeroService } from '../hero.service';//Service
import {MatTable} from '@angular/material/table';  // Permet de mettre à jour les données du tableau, pour l'ajout 
import { NgForm } from '@angular/forms';  // Permet de vérifier si le formulaire est valide
import {MatDialog, MatDialogRef, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogNewHeroComponent } from '../dialog-new-hero/dialog-new-hero.component';

@Component({
  selector: 'app-table-heros',
  templateUrl: './table-heros.component.html',
  styleUrls: ['./table-heros.component.css']
})
export class TableHerosComponent implements OnInit {
  @ViewChild(MatTable) table: MatTable<any>;
  //Tableau de données
  heros: Hero[];
   //Un tableau contenant la liste des éléments à afficher
  columnsToDisplay = ['nom','actions'];
  //Variable du nouveau héro, lors de l'ajout
  newHero: Hero;
  //Variable de l'élément sélectionné
  selectedHero: Hero;
//Créer une variable pour le service
  constructor(private heroService: HeroService, public dialog: MatDialog) { }

  ngOnInit(): void {
    //Appelle de la fonction à l'ouverture de la page
    //Obtient les informations de l'API
    this.getHeros();
    //Définit l'objet newHero
    this.newHero = {_id: null, nom:''};
  }
  //Fonction qui récupère les données de l'API
  //Le void définit une fonction sans return en TS
  getHeros(): void {
    this.heroService.getHeros()
        .subscribe(resultat => this.heros = resultat);
  }
  //Fonction pour l'ajout d'un héro, 1ere méthode avec bouton
  onAdd(tableHeros: MatTable<Hero>, heroFormAjout: NgForm) {
    if(heroFormAjout.valid) {
      this.heroService.addHero(this.newHero)
        .subscribe(hero => { this.heros.push(hero); heroFormAjout.resetForm(); tableHeros.renderRows();});
    }
  }

  //Fonction pour l'ouverture du dialog, 2e méthode avec le dialogue
    //Fonction pour l'ajout lors de la fermeture du dialog, en appuyant sur le crochet

  openDialogNewHero(): void {
    const dialogRef = this.dialog.open(DialogNewHeroComponent, {
      width: '250px',
      data: {hero: this.newHero}
    });

    dialogRef.afterClosed().subscribe(result => {
      console.log('The dialog was closed');
      if(result) {
        this.newHero = result;
        console.log(this.newHero);
        this.heroService.addHero(this.newHero)
            .subscribe(hero  => { this.heros.push(hero); this.newHero._id = null; this.newHero.nom=''; this.table.renderRows()});
      }
    });
    //Prend en charge si on a annulé
  }
  //Fonction pour sélectionner l'élément
  onSelect(hero: Hero): void {
    this.selectedHero = hero;
  }
  //Fonction pour modifier l'élément
  onEdit(heroFormEdition: NgForm): void {
    if (heroFormEdition.valid) {
      this.heroService.updateHero(this.selectedHero)
          .subscribe(() => this.selectedHero = null);
    }
   }
    //Fonction pour supprimer l'élément
   onDelete(hero: Hero): void {
    this.heroService.deleteHero(hero._id)
        .subscribe(result => this.heros = this.heros.filter(h => h !== hero));
   }
   
   

}