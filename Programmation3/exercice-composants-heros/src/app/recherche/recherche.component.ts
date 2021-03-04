import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recherche',
  templateUrl: './recherche.component.html',
  styleUrls: ['./recherche.component.css']
})

export class RechercheComponent implements OnInit {
    @Input() description : string;

 
  constructor() { }
 opened: boolean;
  ngOnInit(): void {
  }

}
