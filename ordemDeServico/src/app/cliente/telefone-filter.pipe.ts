import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneFilter'
})
export class TelefoneFilterPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    return null;
  }

}
