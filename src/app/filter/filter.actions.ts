import { createAction, props } from '@ngrx/store';

export type Filters = 'all' | 'completed' | 'active';

export const setFilter = createAction(
  '[Filter] setFilter',
  props<{ filter: string }>()
);
