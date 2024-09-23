import { Injectable } from '@angular/core';
import { Task } from '../../models/boards.model';
import { BehaviorSubject, Observable, Subscription, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ViewTaskModalService {

  taskClicked: boolean = false;
  addTaskClicked: boolean = false;

  private selectedTaskSubject = new BehaviorSubject<Task | null>(null);

  constructor() { }

  toggleTaskModal() {
    this.taskClicked = !this.taskClicked;
  }

  toggleAddTaskModal() {
    this.addTaskClicked = !this.addTaskClicked;
  }

  // Get data when task is clicked on
  getTaskData(task: any) {
    this.toggleTaskModal();

    this.selectedTaskSubject.next(task);
  }

  get selectedTask$(): Observable<Task | null> {
    return this.selectedTaskSubject.asObservable();
  }
  
}
