import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatePickerCardComponent } from './date-picker-card.component';

describe('DatePickerCardComponent', () => {
  let component: DatePickerCardComponent;
  let fixture: ComponentFixture<DatePickerCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatePickerCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DatePickerCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
