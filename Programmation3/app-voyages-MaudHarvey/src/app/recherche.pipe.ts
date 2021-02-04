import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';


@Pipe({
  name: 'recherche'
})
export class RecherchePipe implements PipeTransform {

   transform(forfaits: Forfait[],etoile: number): Forfait[] {   
     if(!forfaits)
        return forfaits;
    return forfaits.filter(forfait => forfait.hotel.nombreEtoiles === etoile); 
  }
}
