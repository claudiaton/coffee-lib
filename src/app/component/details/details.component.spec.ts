import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatDialogModule, MatDialogRef,  MAT_DIALOG_DATA } from '@angular/material/dialog';
import { DetailsDialog } from '../card/card.component';

import { DetailsComponent } from './details.component';

describe('DetailsComponent', () => {
  let component: DetailsComponent;
  let fixture: ComponentFixture<DetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetailsComponent ],

      imports: [
        // BrowserModule,
        // AppRoutingModule,
        // BrowserAnimationsModule,
        // HttpClientModule,
        // MatCardModule,
        // MatGridListModule,
        MatButtonModule,
        // MatPaginatorModule,
        MatDialogModule,
        // MatChipsModule,
        // StoreModule.forRoot({coffeeLib: listReducer}),
        // EffectsModule.forRoot([CoffeeEffects]),
        // StoreDevtoolsModule.instrument({ name:"Coffee Lib", maxAge: 25, logOnly: !isDevMode() }),
      ],
      providers: [
        { provide: MAT_DIALOG_DATA, useValue: {} },
        {
          provide: MatDialogRef,
          useValue: {}
        },
        DetailsDialog
     ],
    })
    .compileComponents();

    fixture = TestBed.createComponent(DetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
