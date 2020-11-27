import { Component } from '@angular/core';
import { Forfait } from './forfait';
import { FORFAITS } from './mock-forfaits';




@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app-voyages-MaudHarvey';
  //test de méthode
   nomDeLaMethode() {

console.log('Ce texte s’affiche dans la console de votre navigateur! Le titre change aussi!!');
}
  
  //variable pour le forfait entier contenant le tableau mock
  forfaits: Forfait[] = FORFAITS;

}
