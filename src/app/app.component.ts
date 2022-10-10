import { Component, OnInit } from '@angular/core';
import { DashboardService } from './dashboard-sale/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-dashboard-add';
  isCollapsed = false;
  onHeaderDashboard:any
  constructor(private dashvoardService: DashboardService ) { }

  ngOnInit(): void {
    this.dashvoardService.dashboardHeader.subscribe((isDashboardHeader) => {
      this.onHeaderDashboard = isDashboardHeader;
    });
  }

}
