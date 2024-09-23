import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Task } from '../../models/boards.model';
import { Subscription } from 'rxjs';
import { AsyncPipe, NgIf } from '@angular/common';
import { BoardComponent } from '../board/board.component';
import { ViewTaskModalService } from '../../services/modal/view-task-modal.service';

@Component({
  selector: 'app-view-task-modal',
  standalone: true,
  imports: [AsyncPipe, BoardComponent, NgIf],
  templateUrl: './view-task-modal.component.html',
  styleUrl: './view-task-modal.component.scss'
})
export class ViewTaskModalComponent {
  selectedTask: Task | null = null;
  private subscription: Subscription = new Subscription();

  checkCompletedCount: number = 0;
  public isComplete: Subscription = new Subscription();

  constructor(
      private store: Store, 
      public taskService: ViewTaskModalService
  ) {}


//   ngOnInit() {
//     this.subscription = this.taskService.selectedTask$.subscribe(task => {
//       this.selectedTask = task;
//     });

//     this.isComplete = this.taskService?.selectedTask$.subscribe(task => {
//       task?.subtasks.forEach(sub => {
//           if(sub.isCompleted === true) {
//             this.checkCompletedCount += 1;
//           }
//           console.log("Current Count: ", this.checkCompletedCount)
//       })
//     })
//   }

//   ngOnDestroy() {
//     this.subscription.unsubscribe();
//   }

// }

ngOnInit() {
  // Subscribe to task selection
  this.subscription = this.taskService.selectedTask$.subscribe(task => {
    this.selectedTask = task;
    // Reset checkCompletedCount whenever a new task is selected
    this.checkCompletedCount = 0;

    // Calculate the number of completed subtasks
    task?.subtasks.forEach(sub => {
      if (sub.isCompleted) {
        this.checkCompletedCount += 1;
      }
    });

    console.log('Completed subtasks count:', this.checkCompletedCount);
  });
}

ngOnDestroy() {
  // Unsubscribe to avoid memory leaks
  this.subscription.unsubscribe();
  this.isComplete.unsubscribe();
}
}
