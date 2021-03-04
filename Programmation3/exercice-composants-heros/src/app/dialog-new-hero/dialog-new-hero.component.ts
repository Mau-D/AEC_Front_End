import { Component, OnInit, Inject } from '@angular/core';
import { Hero } from '../hero';//Interface
 import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';


@Component({
  selector: 'app-dialog-new-hero',
  templateUrl: './dialog-new-hero.component.html',
  styleUrls: ['./dialog-new-hero.component.css']
})
export class DialogNewHeroComponent implements OnInit {

  constructor(
    public dialogRef: MatDialogRef<DialogNewHeroComponent>,
    //Rend accessible la valeur du nouveau héro
    @Inject(MAT_DIALOG_DATA) public newHero: Hero) {
     }
    //Fonction pour annuler l'ajout, le dialog ferme
    onAnnulerClick(): void {
      this.dialogRef.close();
    }

  ngOnInit(): void {
  }

}
