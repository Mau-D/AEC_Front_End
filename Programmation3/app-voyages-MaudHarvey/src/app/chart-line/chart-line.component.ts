import { Component, OnInit, Input } from '@angular/core';
import { ChartDataSets, ChartOptions } from 'chart.js';
import { Color, Label } from 'ng2-charts';
import { Reservation } from '../reservation';//Interface
import { VoyagesService } from '../voyages.service';//Service

@Component({
  selector: 'app-chart-line',
  templateUrl: './chart-line.component.html',
  styleUrls: ['./chart-line.component.css']
})

export class ChartLineComponent implements OnInit {
//variable des données de l'API des réservations
  reservations: Reservation[];
  //variable pour les dates
  janvier: Array<number> = [];
  decembre: Array<number>=[];
 
  
  public lineChartData: ChartDataSets[] = [
    { data: this.decembre, label: 'Décembre' },{ data: this.janvier, label: 'Janvier' }
  ];
  public lineChartLabels: Label[] = ['1er', '2', '3', '4', '5', '6', '7','8','9','10','11','12','13','14','15','16','17','18','19','20','21','22','23','24','25','26','27','28','29','30','31'];
  
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
//Fonction pour le calcul de réservations par date, enté ensuite dans les tableaux pour le graphiques
  calculReservationsTable() {
    let tableauRes = this.reservations;
    let tabJanvier: Array<number> = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    let tabDecembre: Array<number> = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
    tableauRes.forEach(element => {
      let dateForfait: Date = new Date(element.dateReservation);
      for(let i:number=0; i<31;i++){
       //Janvier getMonth=0
        if( dateForfait.getMonth() === 0){
          if(dateForfait.getDate() === i+1){
            tabJanvier[i]++
            this.janvier[i]=tabJanvier[i]
          }
        }
       //Décembre getMonth=11
       else if( dateForfait.getMonth() === 11){
         if(dateForfait.getDate() === i+1){
           tabDecembre[i]++
          this.decembre[i]=tabDecembre[i]
         }
       }
     }
    });
  };

    ngOnInit(): void {
    this.getReservations();
  
  } 
   
  constructor(private voyagesService: VoyagesService) {
    
   }
  
 //Fonction qui récupère les données de l'API
 //Le code est modifié pour permettre l'attente des de la réponse de l'API avant de continuer les autres lignes de code en dessous
  getReservations(): void {
    this.voyagesService.getReservations()
        .subscribe((resultat) => {this.reservations = resultat;
     this.calculReservationsTable();});
  }
}
