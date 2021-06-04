import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/app.reducer';
import { Todo } from '../models/todo.model';
import * as actions from '../todo.actions';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css'],
})
export class TodoItemComponent implements OnInit {
  @Input() todo: Todo;
  @ViewChild('inputEdit') txtInputEdit: ElementRef;
  chkCompleted: FormControl;
  txtEdit: FormControl;
  editMode: boolean = false;

  constructor(private store: Store<AppState>) {}

  ngOnInit(): void {
    this.chkCompleted = new FormControl(this.todo?.completed);
    this.chkCompleted.valueChanges.subscribe((value) =>
      this.store.dispatch(actions.toggleCompleted({ id: this.todo.id }))
    );
    this.txtEdit = new FormControl(this.todo?.name, Validators.required);
  }

  editing() {
    this.editMode = true;
    this.txtEdit.setValue(this.todo.name);
    setTimeout(() => {
      this.txtInputEdit.nativeElement.focus();
    }, 1);
  }

  finishEdit() {
    this.editMode = false;
    if (this.txtEdit.invalid) return;
    if (this.txtEdit.value == this.todo.name) return;
    this.store.dispatch(
      actions.editTodo({ id: this.todo.id, name: this.txtEdit.value })
    );
  }

  deleteTodo() {
    this.store.dispatch(actions.deleteTodo({ id: this.todo.id }));
  }
}
