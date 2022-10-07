import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TotalSaleUnitComponent } from './total-sale-unit.component';

describe('TotalSaleUnitComponent', () => {
  let component: TotalSaleUnitComponent;
  let fixture: ComponentFixture<TotalSaleUnitComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TotalSaleUnitComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TotalSaleUnitComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
