import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from './theme';

/* App Styles */
export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
`;

/* Header Styles */
// height: ${props => props.expand ? '440px' : '80px'};
export const HeaderContainer = styled.header`
    background-color: ${theme.colors.darkBlue};
    border-bottom: 5px solid ${theme.colors.lightBlue};
    width: 100%;
    height: ${props => props.expand ? '440px' : '80px'};
    display: flex;
    flex-direction: ${props => props.expand ? 'column' : 'row'};
    align-items: ${props => props.expand ? 'flex-start' : 'center'};
    justify-content: space-between;
`;

export const Nav = styled.nav`
`;

export const HeaderImage = styled.img`
    border-radius: 50%;
    border: 1px solid ${theme.colors.pink};
    width: 60px;
    height: 60px;
    margin-left: 10px;
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.selected};
    margin: ${props => props.mobile ? '20px 0' : '0 20px'};
    font-size: 1.2rem;
    font-family: ${theme.font};
    text-align: center;
    &:hover{
        color: ${theme.colors.pink};
        transition: color 1s ease;
    };
`;

export const HamburgerContainer = styled.div`
    cursor: pointer;
    margin-right: 20px;
`;

export const MobileContainer = styled(HeaderContainer)`
    position: absolute;
    border: none
`;

export const MobileNavContainer = styled.nav`
    display: ${props => props.open ? 'flex' : 'none'};
    position: relative;
    top: 80px;
    flex-direction: column;
    margin: 0 auto;
`;


/* Main Page Styles */
export const MainContainer = styled.div`
    position: relative;
    z-index: -1;
    height: calc(100vh - 85px);
`;

export const TextContainer = styled.div`
    position: absolute;
    width: 80%;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
`;

export const Text = styled.h1`
    font-family: ${theme.font};
    color: ${theme.colors.white};
    font-size: 3rem;
    text-align: center;
`;

export const HighlightText = styled(Text)`
    color: ${theme.colors.pink};
    margin: 0;
    display: inline;
`;