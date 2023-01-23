import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data/data.service';
import { getItems } from '../store/actions';
import { Store } from '@ngrx/store';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
// export class ListComponent implements OnInit{

// constructor (private list: DataService) {}

// ngOnInit() {
//   this.list.fetchList().subscribe(
//     (response)=> {
//       this.coffees=response;
//     }
//   )
// }

// coffees:any;

// }

export class ListComponent {
  list$: Observable<Array<string> >;
  constructor(private store: Store<{ list: Array<string> }>) {
    this.list$ = store.select('list');
  }
  //Implement the methods by dispatching actions to the store.
  getItems() {
    this.store.dispatch(getItems());
    this.coffees = this.list$
  }
  coffees:any;

}
