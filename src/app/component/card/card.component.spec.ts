import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { MatDialogModule, MatDialogRef } from '@angular/material/dialog';
import { AppComponent } from 'src/app/app.component';
import { ListComponent } from '../list/list.component';
import { CardComponent, DetailsDialog } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ 
        AppComponent,
        ListComponent,
        CardComponent, 
    ],

    imports: [
      MatCardModule,
      MatButtonModule,
      MatDialogModule,
      MatChipsModule,
    ],
    providers: [
      {
        provide: MatDialogRef,
        useValue: {}
      },
      DetailsDialog
   ],

    })
    .compileComponents();

    
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Card Component', () => {
    expect(component).toBeTruthy();
  });

  it('should have as 2nd title "Variety"', () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')).toBeDefined;
    });

    it('should render subtitle', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('mat-card-subtitle')?.textContent).toContain('Variety');
      });


});
