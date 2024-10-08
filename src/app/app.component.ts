import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { HeaderComponent } from "./components/header/header.component";
import { SideBarComponent } from './components/side-bar/side-bar.component';
import { BoardComponent } from './components/board/board.component';
import { Store } from '@ngrx/store';
import { loadBoards } from './store/actions/boards.action';
import { ViewTaskModalComponent } from './components/view-task-modal/view-task-modal.component';
import { ViewTaskModalService } from './services/modal/view-task-modal.service';
import { AddNewTaskComponent } from './components/add-new-task/add-new-task.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, HeaderComponent, SideBarComponent, BoardComponent, ViewTaskModalComponent, AddNewTaskComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'kanban-task-management-app';

  constructor(private store: Store, public taskService: ViewTaskModalService) {

  }

  ngOnInit() {
    this.store.dispatch(loadBoards());
  }
}
