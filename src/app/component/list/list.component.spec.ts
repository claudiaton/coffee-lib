import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatPaginatorModule } from '@angular/material/paginator';
import { StoreModule } from '@ngrx/store';
import { listReducer } from 'src/app/store/reducers';

import { ListComponent } from './list.component';

describe('ListComponent', () => {
  let component: ListComponent;
  let fixture: ComponentFixture<ListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListComponent ],

      imports: [
        HttpClientTestingModule,
        MatGridListModule,
        MatPaginatorModule,

        StoreModule.forRoot({coffeeLib: listReducer}),
      ],
      providers: [
     ],

    })
    .compileComponents();

    fixture = TestBed.createComponent(ListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
