import { Action, createReducer, on } from '@ngrx/store';
import { ICoffee} from '../interfaces/ICoffee';
import { LibState } from '../interfaces/LibState';
import { getItems, loadSuccess, loadFailure } from './actions';

export const initialState:LibState = {
  list: [],
  isLoading: false,
  isLoadingSuccess: false,
  isLoadingFailure: false
};

export const listReducer = createReducer(
  initialState,
  on(getItems, (state) => ({...state, isLoading: true})),
  on(loadSuccess, (state, response)=> 
  {
    return  ({...state, list:response.coffeeList, isLoading: false, isLoadingSuccess: true})}),
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

