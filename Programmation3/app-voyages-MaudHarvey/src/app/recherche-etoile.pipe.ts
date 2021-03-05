import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'rechercheEtoile'
})
export class RechercheEtoilePipe implements PipeTransform {
transform(forfaits: Forfait[], etoile: number): Forfait[] {   
    //Si le nombre d'étoiles n'est pas sélectionné
      if(!forfaits || etoile == 0)
        return forfaits;
      else 
       return forfaits.filter(forfait => 
          forfait.hotel.nombreEtoiles == etoile 
         )

}}
