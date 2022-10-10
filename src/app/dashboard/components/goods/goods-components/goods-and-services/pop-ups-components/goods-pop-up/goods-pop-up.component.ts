import {Component} from '@angular/core';

@Component({
  selector: 'app-goods-pop-up',
  templateUrl: './goods-pop-up.component.html',
  styleUrls: ['./goods-pop-up.component.scss',
    '../../../../../../common/styles/pop-up-style.scss']
})
export class GoodsPopUpComponent {
  widgetClose = false;

  constructor() {
  }

  toggle(){
    this.widgetClose = !this.widgetClose;
    console.log(this.widgetClose)
  }
}
