import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DailySaleCardComponent } from './daily-sale-card.component';

describe('DailySaleCardComponent', () => {
  let component: DailySaleCardComponent;
  let fixture: ComponentFixture<DailySaleCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DailySaleCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DailySaleCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
