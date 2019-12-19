import { SUBMIT_LIST } from './ActionTypes';

export default function submitList(name: string) {
    return (dispatch: (arg0: { type: string; payload: string; }) => void) => {
        dispatch({ type: SUBMIT_LIST, payload: name })
    }
}