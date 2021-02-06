import { Component, OnInit } from '@angular/core';
import { ChartType, ChartOptions } from 'chart.js';
import { SingleDataSet, Label, monkeyPatchChartJsLegend, monkeyPatchChartJsTooltip } from 'ng2-charts';
import { VoyagesService } from '../voyages.service';//Service
import { Reservation } from '../reservation';//Interface



@Component({
  selector: 'app-chart-pie',
  templateUrl: './chart-pie.component.html',
  styleUrls: ['./chart-pie.component.css']
})
export class ChartPieComponent implements OnInit  {
  //variable des données de l'API des réservations
  reservations: Reservation[];
  reservationsDestinationTableau: Array<number>= [];
  // Pie
  public pieChartOptions: ChartOptions = {
    responsive: true,
  };
  public pieChartLabels: Label[] = [['Réservations', 'Sud'], ['Réservations', 'Europe'], ['Réservations', 'Asie'], ['Réservations', 'Grand Nord']];
  public pieChartData: SingleDataSet = this.reservationsDestinationTableau;
  public pieChartType: ChartType = 'pie';
  public pieChartLegend = true;
  public pieChartPlugins = [];
  public pieChartColors:Array<any> = [{
    backgroundColor: ['red', 'yellow', 'rgba(148,159,177,0.2)', 'blue'],
    borderColor: ['rgba(135,206,250,1)', 'rgba(106,90,205,1)', 'rgba(148,159,177,1)', 'green']
  }];

  constructor(private voyagesService: VoyagesService) {
   
  }

  ngOnInit(): void {
    this.getReservations();
   

   }
  
  //Fonction pour le calcul du nombre de réservations selon la destination
  calculReservationsTable(){
    let sud: number = 0;
    let asie: number = 0;
    let europe: number = 0;
    let grandnord: number = 0;

    let tableauRes = this.reservations;
   
    //Parcourir le tableau des datas
     tableauRes.forEach(element => {
      let destination = element.destination;
      if( destination === 'Sud'){
          sud++;
      }
      else if( destination === 'Asie'){
          asie++;
      }
      else if( destination === 'Europe'){
          europe++;
      }
      else if( destination === 'Grand Nord'){
          grandnord++;
      }
     });
     //Remplir un tableau pour le les données du graphique
      this.reservationsDestinationTableau.push(sud);
      this.reservationsDestinationTableau.push(asie);
      this.reservationsDestinationTableau.push(europe);
      this.reservationsDestinationTableau.push(grandnord);

    console.log(this.reservationsDestinationTableau);
  }
 //Fonction qui récupère les données de l'API
 //Le code est modifié pour permettre l'attente des de la réponse de l'API avant de continuer les autres lignes de code en dessous
  getReservations(): void {
    this.voyagesService.getReservations()
        .subscribe((resultat) => {this.reservations = resultat;
     this.calculReservationsTable();});
  }
}



    