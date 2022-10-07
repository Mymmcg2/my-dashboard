import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateReportCardComponent } from './create-report-card.component';

describe('CreateReportCardComponent', () => {
  let component: CreateReportCardComponent;
  let fixture: ComponentFixture<CreateReportCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreateReportCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateReportCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
