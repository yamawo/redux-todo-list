import { SUBMIT_NEW_CARD } from './ActionTypes';

export default function submitNewCard(card: string, cardId: number, listId: number) {
    return (dispatch: (arg0: { type: string; payload: { cardName: string; listId: number; cardId: number; }; }) => void) => {
        dispatch({ type: SUBMIT_NEW_CARD, payload: { cardName: card, listId, cardId } });
    }
}