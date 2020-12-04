import { Component } from '@angular/core';
import { Forfait } from './forfait';
import { FORFAITS } from './mock-forfaits';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  description = '';
  title = 'app-voyages-MaudHarvey';
   //variable pour le forfait entier contenant le tableau mock
  forfaits: Forfait[] = FORFAITS;
}
