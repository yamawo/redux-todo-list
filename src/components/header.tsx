import * as React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
const logo = 'public/images/react.png';

const Header = () => (
    <Link to='/'> 
        <HeaderWrapper>
            <Image />
        </HeaderWrapper>
    </Link>
);

const HeaderWrapper = styled.div`
    display: flex;
    juustify-content: center;
    padding: 20px 0 0;
`;

const Image = styled.div`
    background-image: url(${logo});
    width: 65%;
    height: 65px;
    background-repeat: no-repeat;
    filter: drop-shadow(3px 3px 3px #333);
    transition: all 200ms ease-in-out;
    cursor: pointer;
    &:hovor {
        filter: drop-shadow(6px 6px 6px #333);
        transition: all 200ms ease-in-out;
        transform: scale(1,10) rotate(-4.5deg);
    }
`;

export default Header;