import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const NotFound = () => (
    <Wrapper>
        <Text>Not Found</Text>
        <Link to='/'>最初に戻る</Link>
    </Wrapper>
)

const Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Text = styled.h1`
    color: #333;
`;

export default NotFound;