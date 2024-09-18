import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BoardState } from "../reducers/boards.reducer";

export const selectBoardState = createFeatureSelector<BoardState>('boards');

export const selectAllBoards = createSelector(
    selectBoardState,
    (state: BoardState) => state.boards
);

export const selectBoardsLoading = createSelector(
    selectBoardState,
    (state: BoardState) => state.loading
);