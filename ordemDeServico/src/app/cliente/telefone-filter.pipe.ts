import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneFilter'
})
export class TelefoneFilterPipe implements PipeTransform {

  transform(value: string, isAddDDD: boolean): string {
    let newValue = '';

    if (isAddDDD) {
      newValue = '(35) ';
    }
    newValue += value.substring(0, 4) + '-' + value.substring(4);

    return newValue;
  }

}
