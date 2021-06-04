import { createAction, props } from '@ngrx/store';

export const addTodo = createAction(
  '[TodoItem] addTodo',
  props<{ name: string }>()
);

export const toggleCompleted = createAction(
  '[TodoItem] toggleCompleted',
  props<{ id: number }>()
);

export const editTodo = createAction(
  '[TodoItem] editTodo',
  props<{ id: number; name: string }>()
);

export const deleteTodo = createAction(
  '[TodoItem] deleteTodo',
  props<{ id: number }>()
);

export const toggleAll = createAction(
  '[TodoItem] toggleAll',
  props<{ value: boolean }>()
);

export const deleteAllCompleted = createAction('[TodoItem] deleteAll');
