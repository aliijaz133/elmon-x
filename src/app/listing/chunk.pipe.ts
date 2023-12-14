import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'chunk'
})
export class ChunkPipe implements PipeTransform {
  transform(value: any[], chunkSize: number): any[] {
    if (!value || !Array.isArray(value)) return value;

    return Array(Math.ceil(value.length / chunkSize))
      .fill([])
      .map((_, index) => value.slice(index * chunkSize, (index + 1) * chunkSize));
  }
}
