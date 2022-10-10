import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PopularProductTableComponent } from './popular-product-table.component';

describe('PopularProductTableComponent', () => {
  let component: PopularProductTableComponent;
  let fixture: ComponentFixture<PopularProductTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PopularProductTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PopularProductTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
