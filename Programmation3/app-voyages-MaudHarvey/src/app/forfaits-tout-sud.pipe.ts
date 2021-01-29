import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';


@Pipe({
  name: 'PipeForfaitsToutSud'
})
export class ForfaitsToutSudPipe implements PipeTransform {

  transform(forfaits: Forfait[]): Forfait[] {   
     if(!forfaits)
        return forfaits;
    return forfaits.filter(forfait => forfait.destination === 'Cuba' || forfait.destination === 'Mexique' || forfait.destination === 'CostaRica' || forfait.destination === 'Jamaïque'); 
  }

}
