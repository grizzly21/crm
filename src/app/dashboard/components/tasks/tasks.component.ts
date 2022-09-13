import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.scss'],
})
export class TasksComponent implements OnInit {
  filterToggle: boolean = false;
  popUpToggle: boolean = false;
  addTaskForm = new FormGroup({
    title: new FormControl('', Validators.required),
    describe: new FormControl(null, Validators.required),
    date: new FormControl(null, Validators.required),
    performer: new FormControl(null, Validators.required),
  });

  tasksArr = [
    {
      id: 1,
      taskTitle: 'Your task nomer 1',
      describe: 'Lorem ipsun date normal figna',
      date: 'today',
      performer: 'user 1',
      author: 'Admin',
    },
  ];

  constructor() {}

  ngOnInit(): void {}

  onFilterToggle() {
    this.filterToggle = !this.filterToggle;
  }

  onPopUpToggle() {
    this.popUpToggle = !this.popUpToggle;
  }

  onCellClick(event: any) {
    console.log(event);
  }

  onSubmitAddTaskForm() {
    let nextId = 1 + this.getMaxValueId();
    let addItem: any = {
      id: nextId,
      taskTitle: this.addTaskForm.controls['title'].value,
      describe: this.addTaskForm.controls['describe'].value,
      date: this.addTaskForm.controls['date'].value,
      performer: this.addTaskForm.controls['performer'].value,
      author: 'Admin',
    };

    this.tasksArr.push(addItem);

    this.addTaskForm.reset();

    this.onPopUpToggle();
  }

  getMaxValueId() {
    let maxArr: any = [];
    for(let i = 0; i < this.tasksArr.length; i++){
      maxArr.push(this.tasksArr[i].id);
    }

    return Math.max.apply(null, maxArr);
  }
}
