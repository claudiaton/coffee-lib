export interface ICoffee {
    id: string,
    uid: string;
    blend_name: string,
    variety: string,
    origin: string,
    details: {
        notes: Array<string>,
        intensifier: string
    }
}

export interface LibState {
    list: Array<ICoffee>,
    currentItem: string,
    currentPage: number,
    isLoading: boolean,
    isLoadingSuccess: boolean,
    isLoadingFailure: boolean
}