import { Component, OnInit } from '@angular/core';
///Importations de l'interface et du tableau mock
import { Forfait } from '../forfait';
import {FORFAITS } from '../mock-forfaits'


@Component({
  selector: 'app-liste-forfaits',
  templateUrl: './liste-forfaits.component.html',
  styleUrls: ['./liste-forfaits.component.css']
})
export class ListeForfaitsComponent implements OnInit {
  //variable contenant le tableau mock
forfaits: Forfait[] = FORFAITS;
  constructor() { }

  ngOnInit(): void {
  }

}
