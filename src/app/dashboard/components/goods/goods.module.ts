import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GoodsComponent } from './goods.component';
import { GoodsAndServicesComponent } from './goods-components/goods-and-services/goods-and-services.component';
import { InventoryComponent } from './goods-components/inventory/inventory.component';
import { MovingComponent } from './goods-components/moving/moving.component';
import { RemaindersComponent } from './goods-components/remainders/remainders.component';
import { WrittenOffComponent } from './goods-components/written-off/written-off.component';
import { GoodsRoutingModule } from './goods-routing.module';
import {
  GoodsPopUpComponent
} from "./goods-components/goods-and-services/pop-ups-components/goods-pop-up/goods-pop-up.component";

@NgModule({
  imports: [CommonModule, GoodsRoutingModule],
  declarations: [
    GoodsComponent,
    GoodsAndServicesComponent,
    InventoryComponent,
    MovingComponent,
    RemaindersComponent,
    WrittenOffComponent,
    GoodsPopUpComponent
  ],
})
export class GoodsModule {}
