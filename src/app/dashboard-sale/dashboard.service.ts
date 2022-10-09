import { Injectable } from "@angular/core"
import { BehaviorSubject } from "rxjs";

@Injectable()
export class DashboardService {
    private runningSubject: BehaviorSubject<boolean> = new BehaviorSubject(true);
    running = this.runningSubject.asObservable();

    constructor() { }

    setRunning = (value: boolean) => {
        this.runningSubject.next(value);
    }
}