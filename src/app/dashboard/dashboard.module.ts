import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container.component';
import { HeaderComponent } from './header/header.component';
import { SidebarMenuComponent } from './sidebar-menu/sidebar-menu.component';
import { RouterModule } from '@angular/router';
import 'boxicons';


@NgModule({
  imports: [CommonModule, RouterModule],
  declarations: [
    DashboardContainerComponent,
    HeaderComponent,
    SidebarMenuComponent
  ],
  bootstrap: [DashboardContainerComponent],
})
export class DashboardModule {}
