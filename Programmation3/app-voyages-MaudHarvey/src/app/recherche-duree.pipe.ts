import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'rechercheDuree'
})
export class RechercheDureePipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
