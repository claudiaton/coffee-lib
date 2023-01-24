import { ICoffee } from "./ICoffee";

export interface LibState {
    list: Array<ICoffee>,
    currentItem: string,
    currentPage: number,
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingFailure: boolean
}