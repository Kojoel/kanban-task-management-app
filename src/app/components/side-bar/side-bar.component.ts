import { Component } from '@angular/core';
import { SidebarService } from '../../services/sidebar/sidebar.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Board } from '../../models/boards.model';
import { SelectActiveBoard, selectAllBoards } from '../../store/selectors/boards.selectors';
import { AsyncPipe } from '@angular/common';
import { loadBoards } from '../../store/actions/boards.action';

@Component({
  selector: 'app-side-bar',
  standalone: true,
  imports: [AsyncPipe],
  templateUrl: './side-bar.component.html',
  styleUrl: './side-bar.component.scss'
})
export class SideBarComponent {

  boards$: Observable<Board[]>;

  constructor(
    public sidebar: SidebarService,
    private store: Store,
  ) {
    this.boards$ = this.store.select(selectAllBoards);
  }

}
