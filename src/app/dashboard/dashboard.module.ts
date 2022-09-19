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
import { PurchasesComponent } from './components/purchases/purchases.component';
import { ContractorsComponent } from './components/contractors/contractors.component';
import { ReactiveFormsModule } from '@angular/forms';
import { GoodsModule } from './components/goods/goods.module';
@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    DashboardRouterModule,
    ReactiveFormsModule,

    GoodsModule
  ],
  declarations: [
    DashboardContainerComponent,
    HeaderComponent,
    SidebarMenuComponent,

    //important comp
    IndicatorsComponent,
    SalesComponent,
    TasksComponent,
    MoneyComponent,
    PurchasesComponent,
    ContractorsComponent,
  ],
  bootstrap: [DashboardContainerComponent],
})
export class DashboardModule {}
