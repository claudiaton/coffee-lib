import { Pipe, PipeTransform } from "@angular/core";

export interface ICoffee {
    id: string,
    uid: string;
    blend_name: string,
    variety: string,
    origin: string,
    notes: Array<string>,
    intensifier: string
}
