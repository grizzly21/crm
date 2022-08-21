import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DashboardContainerComponent } from './dashboard-container.component';
import { HeaderComponent } from './header/header.component';
import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [DashboardContainerComponent, HeaderComponent],
  bootstrap: [DashboardContainerComponent]
})
export class DashboardModule { }
