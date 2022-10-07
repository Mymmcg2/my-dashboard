import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TopGlobalSaleComponent } from './top-global-sale.component';

describe('TopGlobalSaleComponent', () => {
  let component: TopGlobalSaleComponent;
  let fixture: ComponentFixture<TopGlobalSaleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TopGlobalSaleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TopGlobalSaleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
