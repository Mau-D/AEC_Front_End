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
  janvier: Array<number>=[];

  decembre: Array<number>=[];

  public lineChartData: ChartDataSets[] = [
    { data: this.decembre, label: 'Décembre' },{ data: this.janvier, label: 'Janvier' }
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
    
   console.log('fonction decembre Table');
   //Mois de janvier
    let janv1: number =0;
    let janv2: number =0;
    let janv3: number =0;
    let janv4: number =0;
    //Mois de décembre
      let dec1: number =0;
    let dec2: number =0;
    let dec3: number =0;
    let dec4: number =0;
    let dec5: number =0;
    let dec6: number =0;
    let dec7: number =0;
    let dec8: number =0;
    let dec9: number =0;
    let dec10: number =0;
  

   let tableauRes = this.reservations;
    tableauRes.forEach(element => {
      let dateForfait: Date = new Date(element.dateReservation);
      //Mois de janvier
      if( dateForfait.getMonth() === 0){
        
        if(dateForfait.getDate() === 1){
          janv1++;
        }
        else if(dateForfait.getDate() === 2){
          janv2++;
        }
        else if(dateForfait.getDate() === 3){
          janv3++;
        }
        else if(dateForfait.getDate() === 4){
          janv4++;
        }
      }
      //Mois de décembre
      else if( dateForfait.getMonth() === 11){
     
        if(dateForfait.getDate() === 1){
          dec1++;
        }
        else if(dateForfait.getDate() === 2){
          dec2++;
        }
        else if(dateForfait.getDate() === 3){
          dec3++;
        }
        else if(dateForfait.getDate() === 4){
          dec4++;
        }
        else if(dateForfait.getDate() === 5){
          dec5++;
        }
        else if(dateForfait.getDate() === 6){
          dec6++;
        }
        else if(dateForfait.getDate() === 7){
          dec7++;
        }
        else if(dateForfait.getDate() === 8){
          dec8++;
        }
        else if(dateForfait.getDate() === 9){
          dec9++;
        }
        else if(dateForfait.getDate() === 10){
          dec10++;
        }
       
        
      }

      
    //J'ai réussi à récupérer les données de l'API
    });
   
    //Entrer les données dans le tableau mois de janvier
      this.janvier.push(janv1);
      this.janvier.push(janv2);
      this.janvier.push(janv3);
      this.janvier.push(janv4);
      //Entrer les données dans le tableau mois de décembre

      this.decembre.push(dec1);
      this.decembre.push(dec2);
      this.decembre.push(dec3);
      this.decembre.push(dec4);
      this.decembre.push(dec5);
      this.decembre.push(dec6);
      this.decembre.push(dec7);
      this.decembre.push(dec8);
      this.decembre.push(dec9);
      this.decembre.push(dec10);

      
      console.log(this.decembre);
      return this.decembre;
  };
 
     
   
 
  
  constructor(private voyagesService: VoyagesService) {
 
   }
  ngOnInit(): void {
    this.getReservations();
   
  }
 //Fonction qui récupère les données de l'API
 //Le code est modifié pour permettre l'attente des de la réponse de l'API avant de continuer les autres lignes de code en dessous
  getReservations(): void {
    this.voyagesService.getReservations()
        .subscribe((resultat) => {this.reservations = resultat;
     this.decembreTable();});
  }
  
}
