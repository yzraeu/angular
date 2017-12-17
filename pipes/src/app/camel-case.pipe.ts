import { Pipe, PipeTransform } from '@angular/core';
import { NgForOf } from '@angular/common/src/directives';

@Pipe({
  name: 'camelCase'
})
export class CamelCasePipe implements PipeTransform {

  transform(value: any, args?: any): any {
    const values = value.split(' ');

    let output = '';
    values.forEach(item => {
      const palavra: string = item;
      const primeiroChar = palavra.substring(0, 1).toUpperCase();
      const restoChars = palavra.substring(1, palavra.length).toLowerCase();

      output += `${primeiroChar}${restoChars} `;
    });
    return output.trim();
  }

}
