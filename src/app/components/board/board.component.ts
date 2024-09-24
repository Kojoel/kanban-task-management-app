import { Component } from '@angular/core';
import { ApiService } from '../../services/api/api.service';
import { Store } from '@ngrx/store';
import { Observable, Subscription } from 'rxjs';
import { Board } from '../../models/boards.model';
import { loadBoards } from '../../store/actions/boards.action';
import { SelectActiveBoard, selectAllBoards, selectBoardsLoading } from '../../store/selectors/boards.selectors';
import { AsyncPipe, CommonModule } from '@angular/common';
import { ViewTaskModalService } from '../../services/modal/view-task-modal.service';
import { ViewTaskModalComponent } from '../view-task-modal/view-task-modal.component';
import { Task } from '../../models/boards.model';

@Component({
  selector: 'app-board',
  standalone: true,
  imports: [AsyncPipe, ViewTaskModalComponent, CommonModule],
  templateUrl: './board.component.html',
  styleUrl: './board.component.scss'
})
export class BoardComponent {

    boards$: Observable<Board[]>;
    activeBoard$: Observable<Board[]>;
    loading$: Observable<boolean>;

    constructor(
      public apiService: ApiService,
      public taskService: ViewTaskModalService,
      private store: Store,
    ) {
      this.boards$ = this.store.select(selectAllBoards);
      this.activeBoard$ = this.store.select(SelectActiveBoard);
      this.loading$ = this.store.select(selectBoardsLoading);
    }

    getCompletedSubtasksCount(task: any): number {
      return task.subtasks ? task.subtasks.filter((subtask: any) => subtask.isCompleted).length : 0;
    }

}
