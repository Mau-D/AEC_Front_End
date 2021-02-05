import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Reservation } from '../reservation';//Interface
import { VoyagesService } from '../voyages.service';//Service
import { FORFAITS } from '../mock-forfaits';//Service
import { Forfait } from '../forfait';//Service






@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})

export class ChartLineComponent implements OnInit {
//variable des données de l'API des réservations
  
  reservations: Forfait[] = FORFAITS;
  //variable pour les dates
  dec1: number = 100;
  decembre: Array<number>=[45,45,45];

  public lineChartData: ChartDataSets[] = [
    { data: this.decembre, label: 'Décembre' },{ data: [this.dec1, 2, 10, 33, 67, 200, 40], label: 'Janvier' }
  ];
  public lineChartLabels: Label[] = ['1er', '2', '3', '4', '5', '6', '7','8', '9', '10'];
  
  public lineChartColors: Color[] = [
    {
      borderColor: 'black',
      backgroundColor: ['rgba(255,0,0,0.3)']
    },
     {
      borderColor: 'black',
      backgroundColor: ['rgba(20,191,209,0.3)']
    }
  ];
  public lineChartLegend = true;
  public lineChartType = 'line';
  public lineChartPlugins = [];
  
  decembreTable() {
    console.log('fonction decembre Table')
   let tableauRes = this.reservations;
 
    
   tableauRes.forEach(element => {
   console.log(element._id)
  });
    
    
  };
 
     
   
 
  
  constructor(private voyagesService: VoyagesService) {
 
   }
  ngOnInit(): void {
   
    this.decembreTable();
  }
 //Fonction qui récupère les données de l'API
 
  
}
