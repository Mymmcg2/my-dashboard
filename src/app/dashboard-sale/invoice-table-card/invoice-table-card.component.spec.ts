import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InvoiceTableCardComponent } from './invoice-table-card.component';

describe('InvoiceTableCardComponent', () => {
  let component: InvoiceTableCardComponent;
  let fixture: ComponentFixture<InvoiceTableCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InvoiceTableCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InvoiceTableCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
