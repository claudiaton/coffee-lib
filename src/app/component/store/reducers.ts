import { createReducer, on } from '@ngrx/store';
import { getItems } from './actions';
export const initialState:Array<String> = [];
//Creates a reducer function to handle state transitions.
//Reducer creators reduce the explicitness of reducer functions with switch statements.
export const listReducer = createReducer(
  initialState,
  on(getItems, () => ["My service", "tbd"]),
);