import { Pipe, PipeTransform } from '@angular/core';
import { Forfait } from './forfait';

@Pipe({
  name: 'forfaitExplorateurPipe'
})
export class ForfaitExplorateurPipePipe implements PipeTransform {

 transform(forfaits: Forfait[]): Forfait[] {   
     if(!forfaits)
        return forfaits;
    return forfaits.filter(forfait => forfait.destination != 'Cuba' && forfait.destination != 'Mexique' && forfait.destination != 'Costa Rica' && forfait.destination != 'Jamaïque'); 
  }


}
