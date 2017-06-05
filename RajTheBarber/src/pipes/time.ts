import { Pipe, PipeTransform } from '@angular/core';
import Moment from 'moment';


@Pipe({
  name: 'time',
})
export class Time implements PipeTransform {
  
  transform(value, args) {
    return Moment(value).format('DD[.]MM[.]YY HH:mm');
  }
}
