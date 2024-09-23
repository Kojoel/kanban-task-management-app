import { Component, Input } from '@angular/core';
import { Store } from '@ngrx/store';
import { Board, Task } from '../../models/boards.model';
import { Observable, Subscription, of } from 'rxjs';
import { SelectActiveBoard } from '../../store/selectors/boards.selectors';
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

  constructor(
      private store: Store, 
      public taskService: ViewTaskModalService
  ) {}


  ngOnInit() {
    this.subscription = this.taskService.selectedTask$.subscribe(task => {
      this.selectedTask = task;
      console.log(task);
    });
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }

}

