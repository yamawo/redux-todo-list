import {
    SUBMIT_NEW_BOARD,
    STORE_NEW_BOARD_TO_COLLECTION,
} from './ActionTypes';
import Store from '../Store';

export default function submitNewBoard(title: string) {
    return (dispatch: { (arg0: { type: string; payload: string; }): void; (arg0: { type: string; payload: { id: number; title: string; }; }): void; }) => {
        dispatch({ type: SUBMIT_NEW_BOARD, payload: title });

        const newBoard = {
            id: Store.getState().newBoard.id,
            title: Store.getState().newBoard.title
        }

        dispatch({ type: STORE_NEW_BOARD_TO_COLLECTION, payload: newBoard });
    }
}