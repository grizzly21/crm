import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {IService} from "../../../common/interfaces/IService.interface";
import {ITableView} from "../../../common/interfaces/ITableView.interface";

@Injectable({
  providedIn: "root"
})
export class GoodsService {

  constructor(
    private http: HttpClient,
  ) { }

  getAllGoods(): Observable<ITableView[]>{
    return this.http.get<ITableView[]>(`${environment.apiUrl}goods`)
  }

  addNewGood(good: any){
    return this.http.post(`${environment.apiUrl}goods`, good)
  }

  getAllServices(): Observable<ITableView[]>{
    return this.http.get<ITableView[]>(`${environment.apiUrl}services`)
  }

  addNewService(service: IService | any){
    return this.http.post(`${environment.apiUrl}services`, service)
  }
}
