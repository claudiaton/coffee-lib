import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LibState } from "../interfaces/LibState";

export const getListState = createFeatureSelector<LibState>("list");

export const getList = createSelector(getListState, (state:LibState)=>state.list)