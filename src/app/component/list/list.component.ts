import { Component, HostListener, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { DataService } from 'src/app/service/data/data.service';
import { getItems } from '../../store/actions';
import { createSelector, select, Store } from '@ngrx/store';
import { ICoffee } from '../../interfaces/ICoffee';
import { LibState } from '../../interfaces/LibState';
import { getList } from 'src/app/store/selectors';
import { PageEvent } from '@angular/material/paginator';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit, OnDestroy {

  public getScreenWidth: any;
  public columns: number = 2;
  itemList$: Observable<Array<ICoffee>>;
  recordsToShow: Array<any> = [];

  coffees: any;
  subscription: Subscription = new Subscription();

  constructor(private list: DataService, private store: Store<LibState>) {
    this.itemList$ = this.store.pipe(select(getList));
  }

  onPaginate(pageEvent: PageEvent) {
    this.recordsToShow = this.coffees.slice((pageEvent.pageIndex + 1) * 10 - 10, (pageEvent.pageIndex + 1) * 10)
  }

  checkWindowWidth() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth <= 900) {
      this.columns = 1;
    }
    else if (this.getScreenWidth > 900) {
      this.columns = 2;
    }
  }

  ngOnInit() {
    this.checkWindowWidth();

    this.itemList$ = this.store.pipe(select(getList));

    this.store.dispatch(getItems())

    this.subscription = this.itemList$.subscribe(
      (response) => {
        this.coffees = response;
        this.recordsToShow = this.coffees.slice(0, 10)
      }
    )
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.checkWindowWidth();
  }
}
