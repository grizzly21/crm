import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {IGood} from "../../../common/interfaces/IGood.interface";
import {Observable} from "rxjs";

@Injectable({
  providedIn: "root"
})
export class GoodsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllGoods(): Observable<IGood[]>{
    return this.http.get<IGood[]>(`${environment.apiUrl}goods`)
  }

  addNewGood(good: any){
    return this.http.post(`${environment.apiUrl}goods`, good)
  }
}
