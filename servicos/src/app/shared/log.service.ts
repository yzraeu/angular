import { Injectable } from '@angular/core';
import * as moment from 'moment';

@Injectable()
export class LogService {
  constructor() {}

  log(texto: string) {
    const now = moment().format('hh:mm:ss,SSS');

    console.log(`${now} - ${texto}`);
  }
}
