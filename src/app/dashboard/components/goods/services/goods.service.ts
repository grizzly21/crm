import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {environment} from "../../../../../environments/environment";
import {Observable} from "rxjs";
import {ITableView} from "../../../common/interfaces/ITableView.interface";
import {ICategoryList} from "../../../common/interfaces/ICategoryList.interface";

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

  addNewService(service: any){
    return this.http.post(`${environment.apiUrl}services`, service)
  }

  getCategoryList():Observable<ICategoryList[]>{
    return this.http.get<ICategoryList[]>(`${environment.apiUrl}categoryList`,)
  }
}
