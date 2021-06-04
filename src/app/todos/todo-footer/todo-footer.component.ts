import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { setFilter } from 'src/app/filter/filter.actions';
import { deleteAllCompleted } from 'src/app/todos/todo.actions';

@Component({
  selector: 'app-todo-footer',
  templateUrl: './todo-footer.component.html',
  styleUrls: ['./todo-footer.component.css'],
})
export class TodoFooterComponent implements OnInit {
  currentFilter: string = 'all';
  filters: Array<string> = ['all', 'completed', 'active'];
  active: number = 0;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.store.subscribe((state: AppState) => {
      this.currentFilter = state.filter;
      this.active = state.todos.filter(
        (todo) => todo.completed == false
      ).length;
    });
  }

  setFilter(item) {
    this.currentFilter = item;
    this.store.dispatch(setFilter({ filter: item }));
  }

  deleteAllCompleted() {
    this.store.dispatch(deleteAllCompleted());
  }
}
