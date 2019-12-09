import * as React from 'react';
import styled from 'styled-components';
import { fadeIn } from '../../../Variables/Animation';


const ActiveBoardTitle = ({ children }: string) => (
    <TitleWrapper>
        <Title>{children}</Title>
    </TitleWrapper>
)

const TitleWrapper = styled.div`
    display: flex;
    justify-content: start;
    padding: 10px 60px;
    width: 100%;
    animation: ${ fadeIn } 300ms linear; 
`;

const Title = styled.h1`
    color: white;
    word-break: break-all;
    background-color: #9fe7a4;
    text-shadow: 0 0 3px #000;
    padding: 10px 60px;
    margin: 0 0 0 50px;
    box-shadow: 0 3px 6px rgba(0, 0, 0, 0.16), 0 3px 6px rgba(0, 0, 0, 0.23);
`;

export default ActiveBoardTitle;