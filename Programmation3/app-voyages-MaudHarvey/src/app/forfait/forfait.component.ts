import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';



//Importer les deux interfaces utilisées
@Component({
  selector: 'app-forfait',
  templateUrl: './forfait.component.html',
  styleUrls: ['./forfait.component.css']
})
export class ForfaitComponent implements OnInit {
  //Input des proprietes des forfaits
@Input() proprietesForfait: Forfait;




  constructor() { }

  ngOnInit(): void {
  }

}
