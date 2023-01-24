import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data/data.service';
import { getItems } from '../../store/actions';
import { createSelector, select, Store } from '@ngrx/store';
import { ICoffee} from '../../interfaces/ICoffee';
import { LibState } from '../../interfaces/LibState';
import { getList } from 'src/app/store/selectors';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public getScreenWidth: any;
  public columns: number = 2;
  myList$: Observable<Array<ICoffee>>;
  currentPage$: Observable<Number>;

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
    this.currentPage$ = this.store.select('currentPage');
  }

  // ngOnChange() {
  //   this.coffees = this.myList$
  // }

  ngOnInit() {
    this.checkWindowWidth();

    this.myList$ = this.store.pipe(select(getList));
    this.currentPage$ = this.store.select('currentPage');

    this.list.fetchList().subscribe(
      (response) => {
        this.coffees = response;
      }
    )
  }

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.checkWindowWidth();
  }
}
