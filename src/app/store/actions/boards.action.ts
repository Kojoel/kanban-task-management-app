import { createAction, props } from "@ngrx/store";
import { Board, Task } from "../../models/boards.model";

// Load boards
export const loadBoards = createAction('[Board] Load Boards');
export const loadBoardsSuccess = createAction('[Board] Load Boards Success', props<{ boards: Board[] }>());

export const setActiveBoard = createAction('[Sidebar] Set Active Board', props<{ boardName : string }>());