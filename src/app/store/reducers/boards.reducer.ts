import { createReducer, on } from "@ngrx/store";
import { Board } from "../../models/boards.model";
import * as BoardActions from '../actions/boards.action';

export interface BoardState {
    boards: Board[];
    loading: boolean;
    error: string | null;
}

export const initialState: BoardState = {
    boards: [],
    loading: false,
    error: null
};


export const boardReducer = createReducer(
    initialState,
    on(BoardActions.loadBoards, state => ({...state, loading: true})),
    on(BoardActions.loadBoardsSuccess, (state, { boards }) => ({...state, boards, loading:false}))
);