import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ViewTaskModalService {

  taskClicked: boolean = false;

  constructor() { }

  toggleTaskModal() {
    this.taskClicked = !this.taskClicked;
  }
}
