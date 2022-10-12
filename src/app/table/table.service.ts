import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class TableService {

    constructor(private http: HttpClient) { }

    getUserData() {
        return this.http.get('https://randomuser.me/api/?page=1&results=8&seed=abc')
    }
}