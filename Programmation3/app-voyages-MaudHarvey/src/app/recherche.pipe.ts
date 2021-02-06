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


   transform(forfaits: Forfait[], etoile: number, dureeForfait: number): Forfait[] {   
    console.log('recherche' + dureeForfait)
      if(!forfaits)
        return forfaits;
      if(dureeForfait === 0)
        return forfaits.filter(forfait => this.calculateDiff(forfait.dateDepartD, forfait.dateRetourD) == 7 || this.calculateDiff(forfait.dateDepartD, forfait.dateRetourD) == 10 || this.calculateDiff(forfait.dateDepartD, forfait.dateRetourD) == 14)
    return forfaits.filter(forfait => forfait.hotel.nombreEtoiles >= etoile && this.calculateDiff(forfait.dateDepartD, forfait.dateRetourD) == dureeForfait ); 
  }
}
