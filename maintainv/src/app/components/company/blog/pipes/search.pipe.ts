import { Pipe, PipeTransform } from '@angular/core';
import { BlogModel } from '../models/blog.model';

@Pipe({
  name: 'searchPipe',
  standalone: true
})
export class SearchPipe implements PipeTransform {
  transform(value: BlogModel[], search: string) {

    if(search == '') {
      return value;
    }

    return value.filter( p => {
      return p.title.toLowerCase().includes(search.toLowerCase());
    });
  }
}
