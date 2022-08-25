import { NgModule } from "@angular/core";
import { RouterModule, Routes } from '@angular/router';
import { ContractorsComponent } from "./components/contractors/contractors.component";
import { GoodsComponent } from "./components/goods/goods.component";
import { IndicatorsComponent } from "./components/indicators/indicators.component";
import { MoneyComponent } from "./components/money/money.component";
import { PurchasesComponent } from "./components/purchases/purchases.component";
import { SalesComponent } from "./components/sales/sales.component";
import { TasksComponent } from "./components/tasks/tasks.component";

export const dashboardRoutes: Routes = [
  { path: '', redirectTo: 'indicators', pathMatch: 'full'},
  { path: 'goods', component: GoodsComponent},
  { path: 'indicators', component: IndicatorsComponent},
  { path: 'sales', component: SalesComponent},
  { path: 'money', component: MoneyComponent},
  { path: 'purchases', component: PurchasesComponent},
  { path: 'tasks', component: TasksComponent},
  { path: 'contractors', component: ContractorsComponent},
];

@NgModule({
  imports: [RouterModule.forChild(dashboardRoutes)],
  exports: [RouterModule]
})
export class DashboardRouterModule {}
