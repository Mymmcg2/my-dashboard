import { Component, OnInit } from '@angular/core';
import Chart from 'chart.js/auto';

@Component({
  selector: 'app-market-valus-card',
  templateUrl: './market-valus-card.component.html',
  styleUrls: ['./market-valus-card.component.css']
})
export class MarketValusCardComponent implements OnInit {

  public chart: any

  constructor() { }

  ngOnInit(): void {
    this.createChart();
  }

  createChart() {

    this.chart = new Chart("marketRadar", {
      type: 'radar',
      data: {
        labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        datasets: [
          {
            label: 'Market valus',
            data: ['100', '40', '42', '30', '50', '80', '33', '20'],
            fill: true,
          }
        ]
      },
      options: {
        aspectRatio: 2.5,
      }

    });


  }

}
