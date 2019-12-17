import { HANDLE_DROP } from './ActionTypes';

export default function handleDrop(cardName: string, cardId: number, listId: number, newListId: number) {
    return (dispatch: (arg0: { type: string; payload: { cardName: string; cardId: number; listId: number; newListId: number; }; }) => void) => {
        dispatch({ type: HANDLE_DROP, payload: { cardName, cardId, listId, newListId } });
    }
}