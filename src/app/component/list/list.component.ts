import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
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
export class ListComponent implements OnInit {

  onPaginate(pageEvent: PageEvent) {
    this.recordsToShow = this.coffees.slice((pageEvent.pageIndex+1)*10-10,(pageEvent.pageIndex+1)*10)
}

  public getScreenWidth: any;
  public columns: number = 2;
  myList$: Observable<Array<ICoffee>>;
recordsToShow: Array<any> = [];

  checkWindowWidth() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth <= 900) {
      this.columns = 1;
    }
    else if (this.getScreenWidth > 900) {
      this.columns = 2;
    }
  }
  coffees: any;

  constructor(private list: DataService, private store: Store<LibState>) {
    this.myList$ = this.store.pipe(select(getList));
  }

  ngOnInit() {
    this.checkWindowWidth();

    this.myList$ = this.store.pipe(select(getList));

this.store.dispatch(getItems())

    this.myList$.subscribe(
      (response) => {
        this.coffees = response;
        this.recordsToShow = this.coffees.slice(0,10)
      }
    )
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.checkWindowWidth();
  }
}
