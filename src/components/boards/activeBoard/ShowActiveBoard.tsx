import * as React from 'react';
import { connect } from 'react-redux';
import selectActiveBoard from '../../../actions/SelectActiveBoard';
import enableListEditMode from '../../../actions/ToggleListEditMode';
import submitList from '../../../actions/SubmitList';
import ActiveBoardTitle from './ActiveBoardTitle';
import ListWrapper from './lists/ListWrapper';
import CreateNewList from './lists/CreateNewList';
import ListEditingMode from './lists/ListEditingMode';
import ListItemsContainer from './lists/ListItemsContainer';

class ShowActiveBoard extends React.Component {
    componentDidMount() {
        const {
            match,
            selectActiveBoard,
        } = this.props;
        selectActiveBoard(match.params.id);
    }

    getTitle = () => {
        return this.props.activeBoard.title;
    }

    handleListSubmit = (values) => {
        this.props.submitList(values.listItem);
    }

    render() {
        const { activeBoard, enableListEditMode } = this.props;
        if (activeBoard.isFetching) {
            return (
                <div>ロード中...</div>
            )
        }

        return (
            <div>
                <ActiveBoardTitle>
                    {this.getTitle()}
                </ActiveBoardTitle>
                <ListWrapper>
                    <ListItemsContainer />
                    { activeBoard.isEditingList
                        ? <ListEditingMode onSubmit={this.handleListSubmit} />
                        : <CreateNewList addList={enableListEditMode} />
                    }
                </ListWrapper>
            </div>
        )
    }
}

function mapStateToProps ({ activeBoard }) {
    return {
        activeBoard
    }
}

export default connect(mapStateToProps,
    { selectActiveBoard, enableListEditMode, submitList }
)(ShowActiveBoard);