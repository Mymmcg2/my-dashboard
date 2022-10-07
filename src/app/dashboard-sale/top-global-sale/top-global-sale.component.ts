import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-top-global-sale',
  templateUrl: './top-global-sale.component.html',
  styleUrls: ['./top-global-sale.component.css']
})
export class TopGlobalSaleComponent implements OnInit {

  public chart: any

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("topGlobalPie", {
      type: 'pie',
      data: {
        labels: ['USA', 'Australia', 'Brazil', 'Latvia'],
        datasets: [
          {
            label: 'Revenue',
            data: ['81', '58', '42', '55'],
            backgroundColor: [
              'orange',
              'blue',
              'green',
              'pink'
            ],
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
      }

    });


  }

}
