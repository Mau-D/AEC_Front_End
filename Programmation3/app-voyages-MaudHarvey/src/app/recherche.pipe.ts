import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';


@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {
   calculateDiff(depart, retour){
  var depart: any = new Date(depart);
  var retour: any = new Date(retour);
  var diff: any = Math.floor((retour - depart) / (1000 * 60 * 60 * 24));
  console.log(diff);
  return diff;
  }


   transform(forfaits: Forfait[], etoile: number, dureeForfait: number, departForfait: any): Forfait[] {   
    console.log('recherche' + departForfait)

      if(!forfaits)
        return forfaits;
      else if(dureeForfait === 0)
       return forfaits.filter(forfait => 
          forfait.hotel.nombreEtoiles >= etoile && new Date(forfait.dateDepartD) >= new Date(departForfait) &&
          (this.calculateDiff(forfait.dateDepartD, forfait.dateRetourD) == 7 || 
          this.calculateDiff(forfait.dateDepartD, forfait.dateRetourD) == 10 || 
          this.calculateDiff(forfait.dateDepartD, forfait.dateRetourD) == 14 ))
        else        
          return forfaits.filter(forfait =>forfait.hotel.nombreEtoiles >= etoile && 
            forfait.dateDepartD >= departForfait && 
            this.calculateDiff(forfait.dateDepartD, forfait.dateRetourD) == dureeForfait)
        
    }
}
