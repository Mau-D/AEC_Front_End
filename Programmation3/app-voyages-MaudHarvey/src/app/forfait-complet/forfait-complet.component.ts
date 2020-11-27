import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';


@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})

export class ForfaitCompletComponent implements OnInit {

  //Inclure la propriété, déclaré dans app pour les valeurs du mock-forfait
@Input() proprietesForfait: Forfait;

  constructor() { }
 
  ngOnInit(): void {
  }

}
