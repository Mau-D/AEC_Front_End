import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-prix',
  templateUrl: './prix.component.html',
  styleUrls: ['./prix.component.css']
})
export class PrixComponent implements OnInit {
  //Composant Petit-Enfant
  //Appeler la variable créé dans le composant Enfant et associer son type
@Input() prix: number;
   

  constructor() { }

  ngOnInit(): void {
  }

}
