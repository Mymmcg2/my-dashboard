import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-date-picker-card',
  templateUrl: './date-picker-card.component.html',
  styleUrls: ['./date-picker-card.component.css']
})
export class DatePickerCardComponent implements OnInit {

  date = null;
  rangeDate = null;

  constructor() { }

  ngOnInit(): void {
  }

}
