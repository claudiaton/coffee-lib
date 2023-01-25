import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'split'
})
export class SplitPipe implements PipeTransform {
  transform(text:string, by:string):string[] {
    return text.split(by);
  }

}
