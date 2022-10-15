import {Component, OnDestroy, OnInit} from '@angular/core';
import { IGood } from 'src/app/dashboard/common/interfaces/IGood.interface';
import {GoodsService} from "../../services/goods.service";
import {GoodsCommunicationService} from "../../services/goods-communication.service";

@Component({
  selector: 'app-goods-and-services',
  templateUrl: './goods-and-services.component.html',
  styleUrls: [
    './goods-and-services.component.scss',
    '../../../../common/styles/panel-general-style.scss',
    '../../../../common/styles/pop-up-style.scss',
  ],
})
export class GoodsAndServicesComponent implements OnInit, OnDestroy{
  goodsPopUpToggle = false;

  goods: IGood[] = [];

  constructor(
    private goodsService: GoodsService,
    private communicationService: GoodsCommunicationService
  ) {
  }

  ngOnInit(){
    this.getAllItems();

    // communication with pop-up
    this.communicationService.messageSubject.subscribe(
      next => {
        this.goodsPopUpToggle = next;
      },
      error => {
        console.log(error);
      }
    )

    this.communicationService.updateItemTable.subscribe(
      next => {
        this.getAllItems();
      },
      error => {
        console.log(error);
      }
    )
  }

  getAllItems(){
    this.goodsService.getAllGoods().subscribe(
      (next) => {
        this.goods = next;
      },
      (error) => {
        console.log(error);
      }
    );
  }


  ngOnDestroy() {
    this.communicationService.updateItemTable.unsubscribe();
    this.communicationService.messageSubject.unsubscribe();
  }
}
