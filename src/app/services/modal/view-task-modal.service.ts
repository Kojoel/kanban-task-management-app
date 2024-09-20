import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewTaskModalService {

  taskClicked: boolean = false;
  addTaskClicked: boolean = false;

  constructor() { }

  toggleTaskModal() {
    this.taskClicked = !this.taskClicked;
  }

  toggleAddTaskModal() {
    this.addTaskClicked = !this.addTaskClicked;
    console.log("Add TAsk Button clicked");
  }
}
