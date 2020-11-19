import { Component, OnInit, Input } from '@angular/core';
import { Forfait } from '../forfait';


@Component({
  selector: 'app-forfait-mini',
  templateUrl: './forfait-mini.component.html',
  styleUrls: ['./forfait-mini.component.css']
})
export class ForfaitMiniComponent implements OnInit {
  @Input() proprietesForfait: Forfait;
  @Input() prix: number = 0;
  @Input() rabais: number = 0;
  constructor() { }

  ngOnInit(): void {
  }

}
