import * as React from 'react';
import styled from 'styled-components';
import ShowAllBoards from './ShowAllBoards';
import CreateBoardContainer from './boardCreation/CreateBoardContainer';
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

const Wrapper = styled.div`
    display: flex;
    padding: 60px 35px;
    flex-wrap: wrap;
    animation: ${fadeIn} 300ms linear;
`;

const mapStateToProps = ({ boardsCollection }) =>{
    return (
        boardsCollection
    )
};

export default connect(mapStateToProps)(BoardContainer);