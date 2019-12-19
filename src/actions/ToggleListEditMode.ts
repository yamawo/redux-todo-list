import { LIST_EDIT_MODE_ENABLED } from './ActionTypes';

export default function enableListEditMode() {
    return (dispatch: (arg0: { type: string; payload: boolean; }) => void) => dispatch({ type: LIST_EDIT_MODE_ENABLED, payload: true });
}