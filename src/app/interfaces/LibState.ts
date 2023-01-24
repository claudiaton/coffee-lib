import { ICoffee } from "./ICoffee";

export interface LibState {
    list: Array<ICoffee>,
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingFailure: boolean
}