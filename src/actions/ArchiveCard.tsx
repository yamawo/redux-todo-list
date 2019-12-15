import { ARCHIVE_POST } from './ActionTypes';

export default function archiveCard(cardId, listId) {
    return dispatch => {
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