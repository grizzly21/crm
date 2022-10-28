import { Injectable } from '@angular/core';
import {Subject} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class GoodsCommunicationService {

  constructor() { }

  closePopUp = new Subject<boolean>();
  updateItemTable = new Subject<boolean>();

  onClosePopUp(){
    this.closePopUp.next(false);
  }

  onUpdateItemTable(){
    this.updateItemTable.next(true);
  }
}
