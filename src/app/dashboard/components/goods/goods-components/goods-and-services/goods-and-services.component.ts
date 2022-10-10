import { Component } from '@angular/core';
import { IGood } from 'src/app/dashboard/common/interfaces/IGood.interface';

@Component({
  selector: 'app-goods-and-services',
  templateUrl: './goods-and-services.component.html',
  styleUrls: [
    './goods-and-services.component.scss',
    '../../../../common/styles/panel-general-style.scss',
    '../../../../common/styles/pop-up-style.scss',
  ],
})
export class GoodsAndServicesComponent {

  goodsPopUpToggle = true;

  goods: IGood[] = [
    {
      id: 'name',
      type: 'Товар',
      image: 'macbook',
      itemName: 'MacBook Pro 13 2019 Space Grey',
      code: 43008,
      article: '3213',
      unitOfMeasurement: 'шт',
      purchasePrice: 500,
      salePrice: 650
    },
    {
      id: 'name',
      type: 'Товар',
      image: 'macbook',
      itemName: 'MacBook Pro 13 2019 Space Grey',
      code: 43008,
      article: '3213',
      unitOfMeasurement: 'шт',
      purchasePrice: 500,
      salePrice: 650
    }
  ];

  constructor() {
    console.log(this.goods)
  }

}
