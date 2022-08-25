import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container.component';
import { HeaderComponent } from './header/header.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { RouterModule } from '@angular/router';
import { DashboardRouterModule } from './dashboard-routing.module';
import { IndicatorsComponent } from './components/indicators/indicators.component';
import { SalesComponent } from './components/sales/sales.component';
import { TasksComponent } from './components/tasks/tasks.component';
import { MoneyComponent } from './components/money/money.component';
import { GoodsComponent } from './components/goods/goods.component';
import { PurchasesComponent } from './components/purchases/purchases.component';
import { ContractorsComponent } from './components/contractors/contractors.component';
@NgModule({
  imports: [CommonModule, RouterModule, DashboardRouterModule],
  declarations: [
    DashboardContainerComponent,
    HeaderComponent,
    SidebarMenuComponent,

    //important comp
    IndicatorsComponent,
    SalesComponent,
    TasksComponent,
    MoneyComponent,
    GoodsComponent,
    PurchasesComponent,
    ContractorsComponent,
  ],
  bootstrap: [DashboardContainerComponent],
})
export class DashboardModule {}
