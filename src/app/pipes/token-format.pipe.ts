import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'tokenFormat'
})
export class TokenFormatPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    return null;
  }

}
