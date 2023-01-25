import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();

    
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create Card Component', () => {
    expect(component).toBeTruthy();
  });

  it(`should have as 2nd title 'Variety'`, () => {
    const compiled = fixture.nativeElement as HTMLElement;
    expect(compiled.querySelector('button')).toBeDefined;
    });

    it('should render subtitle', () => {
      const compiled = fixture.nativeElement as HTMLElement;
      expect(compiled.querySelector('mat-card-subtitle')?.textContent).toContain('Variety');
      });


});
