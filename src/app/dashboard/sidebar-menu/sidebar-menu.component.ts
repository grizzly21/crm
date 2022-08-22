import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sidebar-menu',
  templateUrl: './sidebar-menu.component.html',
  styleUrls: ['./sidebar-menu.component.scss']
})
export class SidebarMenuComponent implements OnInit {

  sidebarToggle: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  sidebarToggleBtn(){
    this.sidebarToggle =!this.sidebarToggle;
    console.log(this.sidebarToggle)
  }
}
