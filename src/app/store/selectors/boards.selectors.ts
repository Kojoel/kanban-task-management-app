import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BoardState } from "../reducers/boards.reducer";
import { Board } from "../../models/boards.model";

export const selectBoardState = createFeatureSelector<BoardState>('boards');

export const selectAllBoards = createSelector(
    selectBoardState,
    (state: BoardState) => state.boards
);

export const SelectActiveBoard = createSelector(
    selectBoardState,
    (state: BoardState) => state.boards.filter((state: Board) => state.isActive === 'true')
);

export const selectBoardsLoading = createSelector(
    selectBoardState,
    (state: BoardState) => state.loading
);