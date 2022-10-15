import { Injectable } from '@angular/core';
import {GoodsModule} from "../goods.module";
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoodsCommunicationService {

  constructor() { }

  messageSubject = new Subject<boolean>();
  updateItemTable = new Subject<boolean>();

  onClosePopUp(){
    this.messageSubject.next(false);
  }

  onUpdateItemTable(){
    this.updateItemTable.next(true);
  }
}
