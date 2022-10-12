import { Component, OnInit } from '@angular/core';
import { DashboardService } from '../dashboard-sale/dashboard.service';
import { TableModel } from './table.model';
import { TableService } from './table.service';


@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  userData!: TableModel[]

  constructor(private dashboardService: DashboardService, private tableService: TableService) { }

  ngOnInit(): void {
    this.dashboardService.setDashboardHeader(false)
    this.tableService.getUserData().subscribe((res: any) => {
      const user = res.results
      this.userData = user.map((users: any) => ({
        name: users.name.first + ' ' + users.name.last,
        email: users.email,
        gender: users.gender,
        age: users.dob.age,
        city: users.location.city,
        state: users.location.state,
        country: users.location.country
      }))
    })
  }
}
