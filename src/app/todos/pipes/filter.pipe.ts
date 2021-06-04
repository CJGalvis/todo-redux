import { Pipe, PipeTransform } from '@angular/core';
import { Todo } from '../models/todo.model';

@Pipe({
  name: 'filterTodo',
})
export class FilterPipe implements PipeTransform {
  transform(value: Array<Todo>, filtro: string): Array<Todo> {
    switch (filtro) {
      case 'all':
        return value;

      case 'completed':
        return value.filter((todo) => todo.completed == true);

      case 'active':
        return value.filter((todo) => todo.completed == false);

      default:
        return value;
    }
  }
}
