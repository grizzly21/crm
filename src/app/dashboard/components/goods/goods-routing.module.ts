import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GoodsAndServicesComponent } from './goods-components/goods-and-services/goods-and-services.component';
import { InventoryComponent } from './goods-components/inventory/inventory.component';
import { MovingComponent } from './goods-components/moving/moving.component';
import { RemaindersComponent } from './goods-components/remainders/remainders.component';
import { WrittenOffComponent } from './goods-components/written-off/written-off.component';

export const goodsRoutes: Routes = [
  { path: '', redirectTo: 'goods-and-services', pathMatch: 'full' },
  { path: 'goods-and-services', component: GoodsAndServicesComponent },
  { path: 'written-off', component: WrittenOffComponent },
  { path: 'inventory', component: InventoryComponent },
  { path: 'moving', component: MovingComponent },
  { path: 'remainders', component: RemaindersComponent },
];

@NgModule({
  imports: [RouterModule.forChild(goodsRoutes)],
  exports: [RouterModule],
})
export class GoodsRoutingModule {}
