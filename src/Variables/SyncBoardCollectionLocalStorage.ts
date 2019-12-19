import find from 'lodash/find';

export const loadState = () => {
    try {
        const serializedBoardCollectionState = localStorage.getItem('boardsCollection');
        if (serializedBoardCollectionState === null) {
            return undefined;
        }
        return JSON.parse(serializedBoardCollectionState)
    } catch (err) {
        return undefined;
    }
}

export const saveState = (boards: { boardsCollection: any; activeBoard: any; newBoard?: any; activeBoardData: any; }) => {
    try {
        boards.boardsCollection.map( (board: { id: number; data: any; }) => {
            if (board.id === boards.activeBoard.id) {
                board.data = boards.activeBoardData.listItems
            }
        })
        const serializeActiveBoardState = JSON.stringify(boards)
        localStorage.setItem('boardsCollection', serializeActiveBoardState);
    } catch (err) {
        new Error(err);
    }
}