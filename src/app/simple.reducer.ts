import { Action } from '@ngrx/store';

export function simpleReducer(state: string = 'Hello World', action: Action) {
  
  switch (action.type) {
    case 'SPANISH':
      return state = 'Hola Mondo';
    case 'HEBREW':
      return state = 'שלום עולם';
    default:
      return state;
  }

}
