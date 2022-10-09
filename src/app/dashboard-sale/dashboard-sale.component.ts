import { Component, OnInit,OnDestroy } from '@angular/core';
import { DashboardService } from './dashboard.service';

@Component({
  selector: 'app-dashboard-sale',
  templateUrl: './dashboard-sale.component.html',
  styleUrls: ['./dashboard-sale.component.css']
})
export class DashboardSaleComponent implements OnInit,OnDestroy {

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.setRunning(true)
  }

  ngOnDestroy(){
    this.dashboardService.setRunning(false)
  }

}
