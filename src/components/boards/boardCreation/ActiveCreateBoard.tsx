import * as React from 'react';
import styled from 'styled-components';
import { connect } from 'react-redux';
import { Wrapper } from './CreateBoard';
import cancelCreatingBoard from '../../../actions/CancelCreatingBoard';
import submitNewBoard from '../../../actions/SubmitNewBoard';
import BoardTitleForm from './BoardTitleForm';

class ActiveCreateBoard extends React.Component {

    submit = (values) =>{
        this.props.submitNewBoard(values.boardTitle);
        values.boardTitle = '';
    }

    render() {
        const { 
            cancelCreatingBoard,
        } = this.props;

        return (
            <Wrapper>
                <TopWrapper>
                    <Title>ボードを作る</Title>
                    <CloseBoardIcon
                        onClick={() => cancelCreatingBoard()}
                        src={require('public/images/closeIcon.png')}
                    />
                </TopWrapper>
                <BodyWrapper>
                    <BoardNamingTitle>ボードに名前をつけてください</BoardNamingTitle>
                    <BoardTitleForm
                        onSubmit={this.submit}
                        cancelAction={cancelCreatingBoard}
                    />
                </BodyWrapper>
            </Wrapper>
        )
    }
}

const TopWrapper = styled.div`
    display: flex;
    justify-content: space-around;
    align-items: center;
    width: 100%;
    border-bottom: solid 1px rgb(240, 240, 240);
`;

const Title = styled.h3`
    color: white;
    text-shadow: 0 0 3px #000;
`;

const CloseBoardIcon = styled.img`
    width: 24px;
    height: 24px;
    padding: 5px;
    transition: all 200ms ease-in-out;
    &:hovor {
        transition: all 200ms ease-in-out;
        transform: scale(1.25) rotate(4.5deg);
    }
`;

const BodyWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 10px;
`;

const BoardNamingTitle = styled.h5`
    color: white;
    text-shadow: 0 0 3px #000;
    font-weight: 400;
`;

export default connect(null, { cancelCreatingBoard, submitNewBoard })(ActiveCreateBoard);