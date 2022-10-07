import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardSaleComponent } from './dashboard-sale.component';

describe('DashboardSaleComponent', () => {
  let component: DashboardSaleComponent;
  let fixture: ComponentFixture<DashboardSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
