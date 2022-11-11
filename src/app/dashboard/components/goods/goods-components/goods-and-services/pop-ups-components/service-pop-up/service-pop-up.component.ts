import { Component, OnInit } from '@angular/core';
import {GoodsService} from "../../../../services/goods.service";
import {GoodsCommunicationService} from "../../../../services/goods-communication.service";
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {ITableView} from "../../../../../../common/interfaces/ITableView.interface";

@Component({
  selector: 'app-service-pop-up',
  templateUrl: './service-pop-up.component.html',
  styleUrls: ['./service-pop-up.component.scss',
    '../../../../../../common/styles/pop-up-style.scss']
})
export class ServicePopUpComponent implements OnInit {

  addNewServiceForm = new FormGroup({
    itemName: new FormControl("", Validators.required),
    itemGroup: new FormControl("", Validators.required),
    description: new FormControl(null, Validators.required),
    code: new FormControl(null, Validators.required),
    salePrice: new FormControl(null, Validators.required),
    access: new FormControl("", Validators.required),
    department: new FormControl("", Validators.required),
    generalAccess: new FormControl(false)
  })

  constructor(
    private goodService: GoodsService,
    private communicationService: GoodsCommunicationService
  ) {
  }

  ngOnInit() {
  }

  onAddService(){
    let addService: ITableView = {
      ...this.addNewServiceForm.value as unknown as ITableView,
      type: 'Послуга'
    };
    this.goodService.addNewService(addService).subscribe(
      next => {
        this.addNewServiceForm.reset();
        this.communicationService.onUpdateItemTable();
      },
      error => alert(error)
    )
  }

  onCancel(){
    this.communicationService.onClosePopUp();
  }
}
