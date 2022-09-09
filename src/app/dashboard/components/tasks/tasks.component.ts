import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  filterToggle: boolean = false;
  popUpToggle: boolean = false;

  tasksArr = [
    {
      task: 'Your task nomer 1',
      date: 'today',
      preformer: 'user 1',
      author: 'Admin',
    },
    {
      task: 'Your task nomer 1',
      date: 'today',
      preformer: 'user 1',
      author: 'Admin',
    },
    {
      task: 'Your task nomer 1',
      date: 'today',
      preformer: 'user 1',
      author: 'Admin',
    },
    {
      task: 'Your task nomer 1',
      date: 'today',
      preformer: 'user 1',
      author: 'Admin',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onFilterToggle() {
    this.filterToggle = !this.filterToggle;
  }

  onPopUpToggle(){
    this.popUpToggle = !this.popUpToggle;
  }
}
