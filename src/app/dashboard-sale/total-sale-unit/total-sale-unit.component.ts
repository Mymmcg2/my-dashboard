import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-total-sale-unit',
  templateUrl: './total-sale-unit.component.html',
  styleUrls: ['./total-sale-unit.component.css']
})
export class TotalSaleUnitComponent implements OnInit {

  public chart: any

  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }

  createChart() {

    this.chart = new Chart("totalSalePolar", {
      type: 'polarArea',
      data: {
        labels: ['Desktop', 'Mobile', 'Iphone', 'Window', 'Other'],
        datasets: [
          {
            label: 'Total Sales Unit',
            data: ['24', '19', '29', '16', '5'],
            backgroundColor: [
              'rgb(255, 99, 132)',
              'rgb(75, 192, 192)',
              'rgb(255, 205, 86)',
              'rgb(201, 203, 207)',
              'rgb(54, 162, 235)'
            ]
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
      }

    });


  }

}
