import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'rechercheDuree'
})
export class RechercheDureePipe implements PipeTransform {
  //Fonction pour calculer la durée du forfait
  //Date de départ et du retour du forfait
  calculateDiff(depart, retour){
    var depart: any = new Date(depart);
    var retour: any = new Date(retour);
    var diff: any = Math.floor((retour - depart) / (1000 * 60 * 60 * 24));
    console.log(diff);
    return diff;
  }
   transform(forfaits: Forfait[], dureeForfait: number): Forfait[] {   
    console.log('recherche duree' + dureeForfait)
      if(!forfaits || dureeForfait == 0)
        return forfaits;
      else
       return forfaits.filter(forfait => 
          this.calculateDiff(forfait.dateDepartD, forfait.dateRetourD) == dureeForfait
         )
    }
}
