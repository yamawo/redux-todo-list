import find from 'lodash/find';
import {
    SELECT_ACTIVE_BOARD,
    SELECT_ACTIVE_BOARD_SUCCESS,
} from './ActionTypes';
import Store from '../Store';

export default function selectActiveBoard(id: number) {
    return (dispatch: { (arg0: { type: string; payload: any; }): void; (arg0: { type: string; }): void; }) => {
        const boardsCollection = Store.getState().boardsCollection;
        const activeBoard = find(boardsCollection, board => board.id === id);

        dispatch({ type: SELECT_ACTIVE_BOARD, payload: activeBoard });

        dispatch({ type: SELECT_ACTIVE_BOARD_SUCCESS });
    }
}