import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-revenue',
  templateUrl: './revenue.component.html',
  styleUrls: ['./revenue.component.css']
})
export class RevenueComponent implements OnInit {

  options = ['This Week', 'Last Week', 'Last Monthly'];

  public chart: any

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("RevenueChart", {
      type: 'bar',

      data: {// values on X-Axis
        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
        datasets: [
          {
            label: 'Revenue',
            data: [30, 40, 20, 30, 40, 25, 20, 49, 20, 30, 40, 25],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderRadius: 100,
          }
        ]
      },
      options: {
        aspectRatio: 3,
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
