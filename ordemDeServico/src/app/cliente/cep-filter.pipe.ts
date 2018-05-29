import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'cpfFilter'
})
export class CepFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
