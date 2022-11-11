import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {GoodsComponent} from './goods.component';
import {GoodsAndServicesComponent} from './goods-components/goods-and-services/goods-and-services.component';
import {InventoryComponent} from './goods-components/inventory/inventory.component';
import {MovingComponent} from './goods-components/moving/moving.component';
import {RemaindersComponent} from './goods-components/remainders/remainders.component';
import {WrittenOffComponent} from './goods-components/written-off/written-off.component';
import {GoodsRoutingModule} from './goods-routing.module';
import {
  GoodsPopUpComponent
} from "./goods-components/goods-and-services/pop-ups-components/goods-pop-up/goods-pop-up.component";
import {ReactiveFormsModule} from "@angular/forms";
import {
  ServicePopUpComponent
} from "./goods-components/goods-and-services/pop-ups-components/service-pop-up/service-pop-up.component";
import {TableModule} from "primeng/table";
import {TreeModule} from "primeng/tree";


@NgModule({
    imports: [
        CommonModule,
        GoodsRoutingModule,
        ReactiveFormsModule,
        TableModule,
        TreeModule,
    ],
  declarations: [
    GoodsComponent,
    GoodsAndServicesComponent,
    InventoryComponent,
    MovingComponent,
    RemaindersComponent,
    WrittenOffComponent,
    GoodsPopUpComponent,
    ServicePopUpComponent,
  ]
})
export class GoodsModule {
}
