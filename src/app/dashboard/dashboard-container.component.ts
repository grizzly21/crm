import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-dashboard-container',
  templateUrl: './dashboard-container.component.html',
  styleUrls: ['./dashboard-container.component.scss']
})
export class DashboardContainerComponent implements OnInit {

  toogle: boolean = false;

  constructor() { }

  ngOnInit(): void {
  }

  toggleSidebar(event: boolean){
    this.toogle = event;
  }

}
