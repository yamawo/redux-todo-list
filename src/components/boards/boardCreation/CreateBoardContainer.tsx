import * as React from 'react';
import { connect } from 'react-redux';
import CreateBoard from './CreateBoard';
import ActiveCreateBoard from './ActiveCreateBoard';

interface Props {
    newBoard: object;
}

const CreateBoardContainer = ({ newBoard }: Props) => (
    <div>
        { newBoard.isBoardOpen ? <ActiveCreateBoard /> : <CreateBoard /> }
    </div>
);

const mapStateToProps = ({ newBoard }) => {
    return {
        newBoard
    }
}

export default connect(mapStateToProps)(CreateBoardContainer);