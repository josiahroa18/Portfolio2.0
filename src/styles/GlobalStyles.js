import styled from 'styled-components';
import theme from './theme';
import { Link } from 'react-router-dom';
import { Github, Twitter, Linkedin, Instagram } from '@styled-icons/boxicons-logos';

export const HighlightText = styled.a`
    color: ${theme.colors.pink};
    margin: 0;
    display: inline;
    font-size: ${props => props.about ? '1.3rem' : theme.fontSizes.title};
    text-align: center;
    font-family: ${theme.font};
    cursor: ${props => props.about ? 'pointer' : 'default'};
`;

/* ------- Title Styles ------- */
export const TitleContainer = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
    h1 {
        color: ${props => props.contact ? theme.colors.white : theme.colors.black};
        font-size: 3rem;
        font-family: ${theme.font};
    }
    div {
        position: relative;
        width: 100px;
        height: 5px;
        margin-top: 10px;
        background-color: ${props => props.contact ? theme.colors.pink : theme.colors.black};
        -webkit-appearance: none;
    }
`;

/* ------- Header Styles ------- */
export const HeaderContainer = styled.header`
    background-color: ${theme.colors.darkBlue};
    border-bottom: 5px solid ${theme.colors.lightBlue};
    width: 100%;
    height: ${props => props.expand ? '440px' : '80px'};
    display: flex;
    flex-direction: ${props => props.expand ? 'column' : 'row'};
    align-items: ${props => props.expand ? 'flex-start' : 'center'};
    justify-content: space-between;
    img {
        border-radius: 50%;
        border: 1px solid ${theme.colors.pink};
        width: 60px;
        height: 60px;
        margin-left: 10px;
    }
    .hamburger-container {
        cursor: pointer;
        margin-right: 20px;
    }
`;

export const StyledLink = styled(Link)`
    text-decoration: none;
    color: ${props => props.selected ? theme.colors.pink : theme.colors.white};
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

/* ------- Main Page Styles ------- */
export const MainContainer = styled.div`
    position: relative;
    height: calc(100vh - 85px);
    .text-container {
        position: absolute;
        width: 80%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        h1 { 
            font-family: ${theme.font};
            color: ${theme.colors.white};
            font-size: ${theme.fontSizes.title};
            text-align: center;
        }
    }
`;

/* ------- Social Bar Styles ------- */
export const SocialBarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 20px 0;
    width: 750px;
    background-color: ${theme.colors.darkGrey};
    margin: 0 auto;
    border-radius: 10px;
    a {
        text-decoration: none;
        cursor: pointer;
    }
    ${theme.breakpoints.tablet}{
        width: 100%;
        border-radius: 0;
    }
`;

export const GitHubLogo = styled(Github)`
    color: ${theme.colors.lightBlue};
    width: 40px;
    margin: 0 10px;
`;

export const TwitterLogo = styled(Twitter)`
    color: ${theme.colors.lightBlue};
    width: 40px;
    margin: 0 10px;
`;

export const InstagramLogo = styled(Instagram)`
    color: ${theme.colors.lightBlue};
    width: 40px;
    margin: 0 10px;
`;

export const LinkedInLogo = styled(Linkedin)`
    color: ${theme.colors.lightBlue};
    width: 40px;
    margin: 0 10px;
`;