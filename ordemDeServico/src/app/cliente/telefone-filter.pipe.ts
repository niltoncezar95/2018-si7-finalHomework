import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'telefoneFilter'
})
export class TelefoneFilterPipe implements PipeTransform {

  transform(value: string): string {

    let is9Digit;
    console.log(value.length)
    if(value.length == 11 ) 
      is9Digit = true;
    
    let newValue = '(';

    if (is9Digit) {
      newValue += value.substring(0, 2) + ') '
                + value.substring(2, 7) + '-'
                + value.substring(7);
    } else{
      newValue += value.substring(0, 2) + ') '
                + value.substring(2, 6) + '-'
                + value.substring(6);
    }
    return newValue;
  }

}
