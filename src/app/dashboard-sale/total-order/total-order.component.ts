import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-total-order',
  templateUrl: './total-order.component.html',
  styleUrls: ['./total-order.component.css']
})
export class TotalOrderComponent implements OnInit {

  public chart: any

  options = ['Today', 'This Week'];

  constructor() { }

  ngOnInit(): void {
    this.createChart()
  }

  createChart() {

    this.chart = new Chart("totalOrderChart", {
      type: 'bar',

      data: {// values on X-Axis
        labels: ['Mon','Tue','Wed','Thu','Fri'],
        datasets: [
          {
            label: 'Total Order',
            data: [30, 40, 20, 30, 40, 25, 20, 49, 20, 30, 40, 25],
            backgroundColor: 'rgba(75, 192, 192, 0.2)',
            borderRadius: 100,
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
