import {Component} from '@angular/core';
import {FormControl, FormGroup, Validators} from "@angular/forms";
import {IGood} from "../../../../../../common/interfaces/IGood.interface";
import {GoodsService} from "../../../../services/goods.service";
import {GoodsCommunicationService} from "../../../../services/goods-communication.service";

@Component({
  selector: 'app-goods-pop-up',
  templateUrl: './goods-pop-up.component.html',
  styleUrls: ['./goods-pop-up.component.scss',
    '../../../../../../common/styles/pop-up-style.scss']
})
export class GoodsPopUpComponent {

  addNewGoodForm = new FormGroup({
    goodImage: new FormControl(null),
    itemName: new FormControl("", Validators.required),
    itemGroup: new FormControl(null, Validators.required),
    description: new FormControl(null, Validators.required),
    code: new FormControl(null, Validators.required),
    article: new FormControl(null, Validators.required),
    purchasePrice: new FormControl(null, Validators.required),
    salePrice: new FormControl(null, Validators.required),
    access: new FormControl(null, Validators.required),
    department: new FormControl(null, Validators.required),
    generalAccess: new FormControl(null)
  })

  constructor(
    private goodService: GoodsService,
    private communicationService: GoodsCommunicationService
  ) {
  }

  onAddGood() {
    let value: IGood = {
      ...this.addNewGoodForm.value as unknown as IGood,
      unitOfMeasurement: 'шт',
      type: 'Товар'
    };
    this.goodService.addNewGood(value).subscribe(
      next => {
        console.log(next);
        this.addNewGoodForm.reset();
        this.communicationService.onUpdateItemTable();
      }
    )
  }

  onCancel(){
    this.communicationService.onClosePopUp();
  }
}
