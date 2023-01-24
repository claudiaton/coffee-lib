import { createFeatureSelector, createSelector } from "@ngrx/store";
import { LibState } from "../interfaces/LibState";

export const getListState = createFeatureSelector<LibState>("coffeeLib");

export const getList = createSelector(getListState, (state:LibState)=>{
    console.log(state)
    return state.list})