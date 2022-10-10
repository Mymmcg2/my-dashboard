import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DashboardService {
    private dashBoardHeaderSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);
    dashboardHeader = this.dashBoardHeaderSubject.asObservable();

    constructor() { }

    setDashboardHeader = (value: boolean) => {
        this.dashBoardHeaderSubject.next(value);
    }
}