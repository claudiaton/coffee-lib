import { Action, createReducer, on } from '@ngrx/store';
import { ICoffee, LibState } from '../interfaces/ICoffee';
import { getItems, loadSuccess, loadFailure } from './actions';

//export const initialState:Array<ICoffee> = [];
export const initialState:LibState = {
  list: [],
  currentItem: "none",
  currentPage: 0,
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

//Creates a reducer function to handle state transitions.
//Reducer creators reduce the explicitness of reducer functions with switch statements.

export const listReducer = createReducer(
  initialState,
  on(getItems, (state) => ({...state, isLoading: true})),
  on(loadSuccess, (state)=> ({...state, isLoading: false, isLoadingSuccess: true})),
);

export function reducer(state: LibState | undefined, action: Action): any {
  return listReducer(state, action);
}

export const populateList = (state: LibState) => {
  return {
    list: state.list,
    isLoading: state.isLoading,
    isLoadingSuccess: state.isLoadingSuccess
  }
}

