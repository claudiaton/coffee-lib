import { createAction, props } from '@ngrx/store';
import { ICoffee } from '../interfaces/ICoffee';
export const getItems = createAction('[List] Get');

export const loadSuccess = createAction('[List] Success',
    props<any>());
export const loadFailure = createAction('[List] Unreachable',
    props<{ message: string }>());