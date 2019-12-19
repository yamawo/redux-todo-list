import { CANCEL_NEW_BOARD } from './ActionTypes';

export default function cancelCreatingBoard() {
    return {
        type: CANCEL_NEW_BOARD,
        payload: false,
    }
}

// FIXME アロー関数で記述するとimportしたものが使用されていない旨のWARNINGが出る