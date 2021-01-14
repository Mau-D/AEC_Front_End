import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-etoile',
  templateUrl: './etoile.component.html',
  styleUrls: ['./etoile.component.css']
})
export class EtoileComponent implements OnInit {
@Input() nbrEtoiles: number;
  constructor() { }

  ngOnInit(): void {
  }

}
