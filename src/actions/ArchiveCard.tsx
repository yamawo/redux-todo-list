import { ARCHIVE_POST } from './ActionTypes';

export default function archiveCard(cardId: any, listId: any) {
    return (dispatch: (arg0: { type: string; payload: { cardId: number; listId: number; }; }) => void) => {
        dispatch({ type: ARCHIVE_POST, payload: { cardId, listId } })
    }
}

// ##FIXME 下の記述だと ARCHIVE_POSTが使用されていませんとなる。
// const archiveCard = (cardId, listId) => {
//         return { 
//             dispatch({ type: ARCHIVE_POST, payload: { cardId, listId } })
//         }
// }

// export default archiveCard;