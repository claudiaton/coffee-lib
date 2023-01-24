
import { Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { map, exhaustMap, catchError } from 'rxjs/operators';
import { of } from 'rxjs';
import { DataService } from '../service/data/data.service';
import * as coffeeActions from '../store/actions';

@Injectable()
export class CoffeeEffects {

  constructor(
    private actions$: Actions,
    private dataService: DataService
  ) { }

  populateList$ = createEffect(() =>
    this.actions$.pipe(
      ofType(coffeeActions.getItems),
      exhaustMap(action =>
        this.dataService.fetchList().pipe(
          map(response => {
            return coffeeActions.loadSuccess({coffeeList: response})}),
          catchError((error: any) => of(coffeeActions.loadFailure(error))))
      )
    )
  )
}