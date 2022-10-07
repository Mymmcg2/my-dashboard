import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MarketValusCardComponent } from './market-valus-card.component';

describe('MarketValusCardComponent', () => {
  let component: MarketValusCardComponent;
  let fixture: ComponentFixture<MarketValusCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MarketValusCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MarketValusCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
