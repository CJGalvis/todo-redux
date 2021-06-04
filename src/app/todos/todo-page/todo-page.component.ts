import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { toggleAll } from '../todo.actions';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.css'],
})
export class TodoPageComponent implements OnInit {
  completeds: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {}

  toggleAll() {
    this.completeds = !this.completeds;
    this.store.dispatch(toggleAll({ value: this.completeds }));
  }
}
