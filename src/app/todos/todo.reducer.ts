import { createReducer, on } from '@ngrx/store';
import { Todo } from './models/todo.model';
import * as actions from './todo.actions';

export const initialState: Array<Todo> = [
  new Todo('Salvar el mundo'),
  new Todo('Vencer a thanos'),
  new Todo('Comprar traje'),
];

const _todoReducer = createReducer(
  initialState,
  on(actions.addTodo, (state, { name }) => [...state, new Todo(name)]),
  on(actions.deleteTodo, (state, { id }) =>
    state.filter((todo) => todo.id !== id)
  ),
  on(actions.deleteAllCompleted, (state) =>
    state.filter((todo) => !todo.completed)
  ),
  on(actions.toggleAll, (state, { value }) => {
    return state.map((todo) => {
      return {
        ...todo,
        completed: value,
      };
    });
  }),
  on(actions.toggleCompleted, (state, { id }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          completed: !todo.completed,
        };
      } else {
        return todo;
      }
    });
  }),
  on(actions.editTodo, (state, { id, name }) => {
    return state.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          name,
        };
      } else {
        return todo;
      }
    });
  })
);

export function todoReducer(state, action) {
  return _todoReducer(state, action);
}
