import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'getFullDays',
})
export class GetFullDaysPipe implements PipeTransform {

  transform(fullDifference: number, ...args: unknown[]): unknown {
    const days = Math.floor(fullDifference / 1000 / 60 / 60 / 24);
    return days;
  }
}
