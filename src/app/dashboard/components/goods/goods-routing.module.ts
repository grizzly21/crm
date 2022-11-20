import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsAndServicesComponent } from './goods-components/goods-and-services/goods-and-services.component';
import { GoodsPopUpComponent } from './goods-components/goods-and-services/pop-ups-components/goods-pop-up/goods-pop-up.component';
import { KitsPopUpComponent } from './goods-components/goods-and-services/pop-ups-components/kits-pop-up/kits-pop-up.component';
import { ServicePopUpComponent } from './goods-components/goods-and-services/pop-ups-components/service-pop-up/service-pop-up.component';
import { InventoryComponent } from './goods-components/inventory/inventory.component';
import { MovingComponent } from './goods-components/moving/moving.component';
import { RemaindersComponent } from './goods-components/remainders/remainders.component';
import { WrittenOffComponent } from './goods-components/written-off/written-off.component';
import {PostingComponent} from "./goods-components/posting/posting.component";

export const goodsRoutes: Routes = [
  { path: '', redirectTo: 'goods-and-services', pathMatch: 'full' },
  {
    path: 'goods-and-services',
    component: GoodsAndServicesComponent,
    children: [
      { path: 'addGood', component: GoodsPopUpComponent },
      { path: 'addService', component: ServicePopUpComponent },
      { path: 'addKit', component: KitsPopUpComponent },
    ],
  },
  { path: 'written-off', component: WrittenOffComponent },
  { path: 'posting', component: PostingComponent},
  { path: 'inventory', component: InventoryComponent },
  { path: 'moving', component: MovingComponent },
  { path: 'remainders', component: RemaindersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(goodsRoutes)],
  exports: [RouterModule],
})
export class GoodsRoutingModule {}
