import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'summary'
})
export class SummaryPipe implements PipeTransform {

  transform(value: string, clipSize: number): string {
    return value.substr(0,clipSize)+"...";
  }

}
