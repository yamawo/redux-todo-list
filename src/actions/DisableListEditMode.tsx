import { STOP_EDITING_LIST } from './ActionTypes';


export default function disableListEditMode() {
    return (dispatch: (arg0: { type: string; payload: boolean; }) => void) => {
        dispatch({ type: STOP_EDITING_LIST, payload: false });
    }
}