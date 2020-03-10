import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from './theme';
import { Github, Twitter, Linkedin, Instagram } from '@styled-icons/boxicons-logos'

/* ------- App Styles ------- */
export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
`;

export const ContentContainer = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

/* ------- Title Styles ------- */
export const TitleContainer = styled.div`
    margin: 50px auto;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const TitleStyle = styled.h1`
    color: ${theme.colors.black};
    font-size: 3rem;
    font-family: ${theme.font};
`;

export const Bar = styled.div`
    position: relative;
    width: 100px;
    height: 5px;
    margin-top: 10px;
    background-color: ${theme.colors.black};
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


/* ------- Main Page Styles ------- */
export const MainContainer = styled.div`
    position: relative;
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
    font-size: ${theme.fontSizes.title};
    text-align: center;
`;

export const HighlightText = styled.span`
    color: ${theme.colors.pink};
    margin: 0;
    display: inline;
    font-size: ${theme.fontSizes.title};
    text-align: center;
    font-family: ${theme.font};
`;
/* ------- Social Bar Styles ------- */
export const SocialBarContainer = styled.div`
    position: absolute;
    right: 20px;
    bottom: 20px;
    display: flex;
    width: 200px;
    justify-content: space-between;
`;

export const SocialLink = styled.a`
    text-decoration: none;
    cursor: pointer;
`;

export const GitHubLogo = styled(Github)`
    color: ${theme.colors.lightBlue};
    width: 40px;
`;

export const TwitterLogo = styled(Twitter)`
    color: ${theme.colors.lightBlue};
    width: 40px;
`;

export const InstagramLogo = styled(Instagram)`
    color: ${theme.colors.lightBlue};
    width: 40px;
`;

export const LinkedInLogo = styled(Linkedin)`
    color: ${theme.colors.lightBlue};
    width: 40px;
`;


/* ------- Project Page Styles ------- */
export const ProjectContainer = styled.div`
    margin: 0 auto;
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
`;

export const ProjectCardContainer = styled.div`
    width: 300px;
    height: 300px;
    margin: 10px;
    position: relative;
`;

export const ProjectImage = styled.img`
    width: 300px;
    height: 300px;
    filter: ${props => props.hover ? 'blur(5px)' : 'none'};
    border-radius: 5px;
    -webkit-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    -moz-box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
    box-shadow: 0px 0px 5px 0px rgba(0,0,0,0.75);
`;

export const ProjectTitle = styled.h1`
    display: ${props => props.hover ? 'block' : 'none'};
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    font-family: ${theme.font};
    font-size: 2rem;
    color: ${theme.colors.darkBlue};
    text-shadow: 0 0 3px ${theme.colors.lightBlue}, 0 0 3px ${theme.colors.lightBlue}; 
`;

export const ProjectButton = styled.button`
    display: ${props => props.hover ? 'block' : 'none'};
    position: absolute;
    left: 50%;
    transform: translate(-50%, -50%);
    background: none;
    font-family: ${theme.font};
    font-size: 2rem;
    border: 2px solid ${theme.colors.lightBlue};
    color: ${theme.colors.pink};
    cursor: pointer;
    outline: none;
`;

export const DetailsContainer = styled.div`
    position: relative;
    width: 30%;
    min-width: 300px;
    margin: 0 auto;
    background-color: ${theme.colors.darkGrey};
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 20px;
`;

export const DetailsTitle = styled.h1`
    font-family: ${theme.font};
    font-size: 2rem;
    color: ${theme.colors.white};
`;

export const DetailsTech = styled.p`
    font-family: ${theme.font};
    font-size: 1.1rem;
    color: ${theme.colors.lightBlue};
    margin: 5px 0;
`;

export const DetailsSubHeading = styled.h2`
    font-family: ${theme.font};
    font-size: 1.2rem;
    color: ${theme.colors.white};
    margin-top: 20px;
    margin-bottom: 10px;
`;

export const DetailsDescription = styled.p`
    font-family: ${theme.font};
    font-size: 1rem;
    color: ${theme.colors.white};
`;

export const Exit = styled.div`
    font-family: ${theme.font};
    position: absolute;
    font-size: 2rem;
    color: ${theme.colors.pink};
    right: 20px;
    cursor: pointer;
`;

export const DetailsListContainer = styled.ul`
    list-style-type: disc;
    list-style: inside;
`;

export const DetailsListItem = styled.li`
    font-family: ${theme.font};
    margin-bottom: 5px;
`;

export const LinkContainer = styled.div`
    display: flex;
    width: 250px;
    margin: 20px auto;
    justify-content: space-between;
`;

export const DetailsLink = styled.a`
    display: inline-block;
    font-family: ${theme.font};
    color: ${theme.colors.lightBlue};

`;