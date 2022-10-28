import {Component, OnDestroy, OnInit} from '@angular/core';
import {GoodsService} from "../../services/goods.service";
import {GoodsCommunicationService} from "../../services/goods-communication.service";
import {ITableView} from "../../../../common/interfaces/ITableView.interface";

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

  allItems: ITableView[] = [];

  constructor(
    private goodsService: GoodsService,
    private communicationService: GoodsCommunicationService
  ) {
  }

  ngOnInit(){
    this.getAllItems();

    // communication with pop-up
    this.communicationService.closePopUp.subscribe(
      next => {
        this.goodsPopUpToggle = next;
      },
      error => {
        console.log(error);
      }
    )

    this.communicationService.updateItemTable.subscribe(
      next => this.getAllItems(),
      error => console.log(error)
    )
  }

  getAllItems(){
    this.allItems = [];

    this.goodsService.getAllGoods().subscribe(
      (response) => {
        response.forEach(item => {
          this.allItems.push(item)
        })
      },
      (error) => console.log(error)
    );

    this.goodsService.getAllServices().subscribe(
      (response) => {
        response.forEach(item => {
          this.allItems.push(item)
        })
      },
      (error) => console.log(error)
    );
  }


  ngOnDestroy() {
    this.communicationService.updateItemTable.unsubscribe();
    this.communicationService.closePopUp.unsubscribe();
  }
}
