import { Component, OnInit} from '@angular/core';
import { DashboardService } from '../dashboard-sale/dashboard.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {


  listOfData: Array<{ title: string; category: string; teacher: string; lesson: string; enrolled: string; price: string; status: string; }> = [];

  constructor(private dashboardService: DashboardService) { }

  ngOnInit(): void {
    this.dashboardService.setDashboardHeader(false)
    for (let i = 0; i < 11; i++) {
      this.listOfData.push({
        title: `Edward King`,
        category: 'Category name',
        teacher: `Teacher James`,
        lesson: 'Lessons name	',
        enrolled: '16',
        price:'$25.00	',
        status:'active'
      });
    }
  }
}
