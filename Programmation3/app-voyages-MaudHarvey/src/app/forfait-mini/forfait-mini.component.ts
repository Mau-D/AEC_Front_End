import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';


@Component({
  selector: 'app-forfait-mini',
  templateUrl: './forfait-mini.component.html',
  styleUrls: ['./forfait-mini.component.css']
})
export class ForfaitMiniComponent implements OnInit {
  //Inclure la propriété, déclaré dans app pour les valeurs du mock-forfait
  @Input() proprietesForfait: Forfait;
  @Input() description: string;

  constructor() { }

  ngOnInit(): void {
  }

}
