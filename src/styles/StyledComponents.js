import styled from 'styled-components';
import { Link } from 'react-router-dom';
import theme from './theme';
import { Github, Twitter, Linkedin, Instagram, Javascript, Trello } from '@styled-icons/boxicons-logos'
import { GitBranch } from '@styled-icons/boxicons-regular';
import { DeveloperBoard, DataUsage, Person } from '@styled-icons/material';
import { PersonDoneOutline } from '@styled-icons/evaicons-outline';
import { Database } from '@styled-icons/fa-solid';
import { Chat } from '@styled-icons/entypo';
import { Like } from '@styled-icons/boxicons-solid';

/* ------- App Styles ------- */
export const AppContainer = styled.div`
    width: 100%;
    height: 100%;
    margin: 0;
`;

export const ContentContainer = styled.section`
    width: 100%;
    display: flex;
    flex-direction: column;
`;

export const HighlightText = styled.a`
    color: ${props => props.about ?  theme.colors.lightBlue : theme.colors.pink};
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

/* ------- Social Bar Styles ------- */
export const SocialBarContainer = styled.div`
    position: fixed;
    right: 20px;
    bottom: 20px;
    display: flex;
    justify-content: space-between;
    display: flex;
    flex-direction: column;
    z-index: 2;
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
    position: relative;
`;

export const ProjectImage = styled.img`
    width: 300px;
    height: 300px;
    opacity: ${props => props.hover ? '0' : '1'};
    transition: opacity .25s ease-in-out;

`;

export const ProjectTitle = styled.h1`
    display: ${props => props.hover ? 'block' : 'none'};
    position: absolute;
    left: 50%;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    font-family: ${theme.font};
    font-size: 2rem;
    color: ${theme.colors.black};
`;

export const ProjectButton = styled.button`
    display: ${props => props.hover ? 'block' : 'none'};
    position: absolute;
    left: 50%;
    transform: translateY(-50%);
    -ms-transform: translateY(-50%);
    -webkit-transform: translateY(-50%);
    -moz-transform: translateY(-50%);
    -o-transform: translateY(-50%);
    transform: translateX(-50%);
    -ms-transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -moz-transform: translateX(-50%);
    -o-transform: translateX(-50%);
    width: 220px;
    background: none;
    font-family: ${theme.font};
    font-size: 1.8rem;
    border: 2px solid ${theme.colors.lightBlue};
    color: ${theme.colors.black};
    cursor: pointer;
    outline: none;
    ${theme.breakpoints.tablet}{
        font-size: 1.3rem;
    }
    &:hover{
        background-color: ${theme.colors.lightBlue};
        color: ${theme.colors.white};
        transition: color, background-color .55s ease-in-out;
    }
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

/* ------- Skill Page Styles ------- */
export const SkillContainer = styled(ProjectContainer)`
    width: 90%;
    max-width: 1400px;
`;

export const SkillCardContainer = styled.div`
    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px;
`;

export const SkillHeader = styled.h1`
    font-family: ${theme.font};
    font-size: 1.5rem;
`;

export const SkillText = styled.p`
    font-family: ${theme.font};
    font-size: 1.1rem;
    margin: 10px 0;
    color: ${theme.colors.darkBlue};
    text-align: center;
`;

export const JavaScriptIcon = styled(Javascript)`
    color: ${theme.colors.lightBlue};
    width: 70px;
`;

export const BackEndIcon = styled(DeveloperBoard)`
    color: ${theme.colors.lightBlue};
    width: 70px;
`;

export const VersionControlIcon = styled(GitBranch)`
    color: ${theme.colors.lightBlue};
    width: 70px;
`;

export const IndustryKnowledgeIcon = styled(PersonDoneOutline)`
    color: ${theme.colors.lightBlue};
    width: 70px;
`;

export const DataStructuresIcon = styled(DataUsage)`
    color: ${theme.colors.lightBlue};
    width: 70px;
`;

export const DataBaseIcon = styled(Database)`
    color: ${theme.colors.lightBlue};
    width: 70px;
`;

/* ------- About Page Styles ------- */
export const AboutContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 40px 20px;
    ${theme.breakpoints.tablet}{
        flex-direction: column;
    }
`;

export const AboutImg = styled.img`
    width: 200px;
    height: 200px;
    border-radius: 50%;
`;

export const AboutContent = styled.div`
    width: 500px;
    margin-left: 30px;
    ${theme.breakpoints.tablet}{
        text-align: center;
        margin: 20px 20px;
        width: 100%;
    }
`;

export const AboutTitle = styled.h1`
    font-family: ${theme.font};
    font-size: 2rem;
    font-weight: ${props => props.intro ? 'bold' : 'none'};
    text-align: ${props => props.intro ? 'left' : 'center'};
    ${theme.breakpoints.tablet}{
        text-align: center;
    }
`;

export const AboutText = styled.p`
    font-family: ${theme.font};
    font-size: 1.3rem;
    font-size: ${props => props.intro ? '1.3rem' : '1.1rem'};
    margin-top: 10px;
    line-height: 25px;
    font-weight: light;
    text-align: ${props => props.intro ? 'left' : 'center'};
    ${theme.breakpoints.tablet}{
        text-align: center;
    }
`;

export const AboutSkillsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 10px auto;
    margin-bottom: 50px;
`;

export const AboutSkillCard = styled.div`
    width: 330px;
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 20px 10px;
`;

export const LeaderIcon = styled(Person)`
    color: ${theme.colors.lightBlue};
    width: 70px;
`;

export const ChatIcon = styled(Chat)`
    color: ${theme.colors.lightBlue};
    width: 70px;
`;

export const OrganizedIcon = styled(Trello)`
    color: ${theme.colors.lightBlue};
    width: 70px;
`;

export const PersonableIcon = styled(Like)`
    color: ${theme.colors.lightBlue};
    width: 70px;
`;
