import { PrefixNot } from '@angular/compiler';
import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';
import { FORFAITS } from '../mock-forfaits';


@Component({
  selector: 'app-forfait-complet',
  templateUrl: './forfait-complet.component.html',
  styleUrls: ['./forfait-complet.component.css']
})

export class ForfaitCompletComponent implements OnInit {

//Input des proprietes des forfaits
@Input() proprietesForfait: Forfait;

  constructor() { }
 
  ngOnInit(): void {
  }

}
