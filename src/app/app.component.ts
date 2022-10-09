import { Component, OnInit, OnDestroy  } from '@angular/core';
import { DashboardService } from './dashboard-sale/dashboard.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'my-dashboard-add';
  isCollapsed = false;
  onHeaderDashboard = false
  running: any
  constructor(private dashvoardService: DashboardService) { }

  ngOnInit(): void {
    this.dashvoardService.running.subscribe((isRunning) => {
      this.running = isRunning;
    });
  }

}
