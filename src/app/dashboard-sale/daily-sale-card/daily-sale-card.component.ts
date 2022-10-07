import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-daily-sale-card',
  templateUrl: './daily-sale-card.component.html',
  styleUrls: ['./daily-sale-card.component.css']
})
export class DailySaleCardComponent implements OnInit {

  public chart: any

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("DailyChart", {
      type: 'line',
      data: {
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Revenue',
            data: [30, 35, 20, 30, 40, 25, 20, 49, 20, 30, 40, 25],
            fill: false,
            borderColor: 'rgb(75, 192, 192)',
            tension: 0.1
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
        scales: {
          x: {
            grid: {
              display: false
            }
          },
          y: {
            grid: {
              display: false
            }
          }
        }
      }

    });


  }

}
