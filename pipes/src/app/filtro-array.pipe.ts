import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filtroArray'
})
export class FiltroArrayPipe implements PipeTransform {
  transform(value: any, args?: any): any {
    console.log(value.length);
    console.log(args);
    if (value.length === 0 || args === undefined) {
      return value;
    }

    const filter = args.toLocaleLowerCase();

    return value.filter(v => v.toLocaleLowerCase().indexOf(filter) > -1);
  }
}
