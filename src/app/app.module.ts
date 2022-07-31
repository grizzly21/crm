import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';

// PrimeNG
import { MenubarModule } from 'primeng/menubar';
import { MenuItem } from 'primeng/api';

@NgModule({
  declarations: [AppComponent, HeaderComponent],
  imports: [BrowserModule, MenubarModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
