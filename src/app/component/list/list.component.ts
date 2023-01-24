import { Component, HostListener, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/service/data/data.service';
import { getItems } from '../../store/actions';
import { select, Store } from '@ngrx/store';
import { ICoffee } from '../../interfaces/ICoffee';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public getScreenWidth: any;
  public columns: number = 2;
  public myList$: Observable<Array<ICoffee>>;

  checkWindowWidth() {
    this.getScreenWidth = window.innerWidth;
    if (this.getScreenWidth <= 900) {
      this.columns = 1;
    }
    else if (this.getScreenWidth > 900) {
      this.columns = 2;
    }
  }
  constructor(private list: DataService, private store: Store<{ list: Array<ICoffee> }>) {
    this.myList$ = store.select('list');
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
