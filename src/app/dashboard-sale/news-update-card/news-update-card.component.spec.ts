import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NewsUpdateCardComponent } from './news-update-card.component';

describe('NewsUpdateCardComponent', () => {
  let component: NewsUpdateCardComponent;
  let fixture: ComponentFixture<NewsUpdateCardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NewsUpdateCardComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(NewsUpdateCardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
