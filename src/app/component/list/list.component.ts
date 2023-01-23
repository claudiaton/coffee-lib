import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data/data.service';
import { getItems } from '../store/actions';
import { Store } from '@ngrx/store';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public getScreenWidth: any;
  public columns: number = 2;

  checkWindowWidth() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth <= 900) {
      this.columns = 1
    }
    else if (this.getScreenWidth > 900) {
      this.columns = 2
    }
  }
  constructor(private list: DataService, breakpointObserver: BreakpointObserver) {
    // breakpointObserver.observe([
    //   Breakpoints.XSmall,
    //   Breakpoints.Small
    // ]).subscribe(result => {
    //   if (result.matches) {
    //     listCols=1;
    //   }
    //   else {
    //     listCols=2
    //   }
    // });

  }
  ngOnInit() {
    this.checkWindowWidth();

    this.list.fetchList().subscribe(
      (response) => {
        this.coffees = response;
      }
    )
  }
  coffees: any;

  @HostListener('window:resize', ['$event'])
  onWindowResize() {
    this.checkWindowWidth();
  }
}
// export class ListComponent {
//   list$: Observable<Array<string> >;
//   constructor(private store: Store<{ list: Array<string> }>) {
//     this.list$ = store.select('list');
//   }
//   //Implement the methods by dispatching actions to the store.
//   getItems() {
//     this.store.dispatch(getItems());
//     this.coffees = this.list$
//   }
//   coffees:any;
// }

// export class ListComponent implements OnInit{
// constructor (private store: Store<{ list: Array<string> }>) {}
// ngOnInit() {
//     this.coffees = this.store.dispatch(getItems())
//   }
//   coffees:any;
// }
