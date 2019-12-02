import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { fadeIn } from '../../Variables/Animation';

class BoardContainer extends React.Component {

    renderAllBoards = () => {
        const { boardsCollection } = this.props;
            return boardsCollection.map( board => {
                return (
                    <ShowAllBoards
                        id={board.id}
                        key={board.id}
                        title={board.title}
                    />
                )
            })
    }

    render() {
        return (
            <Wrapper>
                <CreateBoardContainer />
                {this.renderAllBoards()}
            </Wrapper>
        )
    }
};

function mapStateToProps({ boardsCollection }) {
    return (
        boardsCollection
    )
};

export default connect(mapStateToProps)(BoardContainer);