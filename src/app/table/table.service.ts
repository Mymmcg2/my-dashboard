import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({ providedIn: "root" })
export class TableService {

    constructor(private http: HttpClient) { }

    getUserData(page: any) {
        return this.http.get(`https://randomuser.me/api/?page=${page}&results=8&seed=abc`)
    }
}