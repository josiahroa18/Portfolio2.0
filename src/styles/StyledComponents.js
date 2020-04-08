import styled from 'styled-components';
import theme from './theme';
import { Javascript, Trello } from '@styled-icons/boxicons-logos'
import { GitBranch } from '@styled-icons/boxicons-regular';
import { DeveloperBoard, DataUsage, Person } from '@styled-icons/material';
import { PersonDoneOutline } from '@styled-icons/evaicons-outline';
import { Database } from '@styled-icons/fa-solid';
import { Chat } from '@styled-icons/entypo';
import { Like } from '@styled-icons/boxicons-solid';

/* ------- Project Page Styles ------- */
export const ProjectContainer = styled.section`
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
    text-align: center;
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
    line-height: 25px;
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
export const AboutBody = styled.section`
    height: calc(100% - 85px);
`;

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
        padding: 0 30px;
    }
`;

export const AboutSkillsContainer = styled.section`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    margin: 50px auto;
    margin-bottom: 50px;
    ${theme.breakpoints.tablet}{
        margin: 5px auto;
    }
`;

export const AboutSkillCard = styled.div`
    width: 300px;
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

/* ------- Contact Page Styles ------- */
export const FormBody = styled.section`
    background-color: ${theme.colors.darkGrey};
    position: absolute;
    height: 100%;
    display: flex;
    overflow: auto;
`;

export const FormContainer = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

export const Error = styled.p`
    color: ${theme.colors.pink};
    font-family: ${theme.font};
    font-size: 1.1rem;
`;

export const ContactLabel = styled.label`
    margin: 10px 0;
    font-family: ${theme.font};
    font-size: 1.3rem;
    color: ${theme.colors.white}
`;

export const ContactInput = styled.input`
    font-family: ${theme.font};
    margin: 10px 0;
    height: 30px;
    width: 300px;
    font-size: 1.2rem;
    border: 1px solid ${theme.colors.black};
`;

export const ContactTextArea = styled.textarea`
    font-family: ${theme.font};
    height: 200px;
    width: 300px;
    resize: none;
    font-size: 1.2rem;
    margin: 10px 0;
    border: 1px solid ${theme.colors.black};
`;

export const ContactSubmit = styled.input`
    margin: 20px 0;
    margin-bottom: 50px;
    width: 150px;
    height: 50px;
    font-family: ${theme.font};
    font-size: 1.2rem;
    cursor: pointer;
    border: none;
    border-radius: 0;
    color: ${theme.colors.white};
    background-color: ${theme.colors.lightBlue};
    -webkit-appearance: none;
    &:hover{
        background-color: ${theme.colors.white};
        color: ${theme.colors.lightBlue};
        transition: color, background-color .55s ease;
    }
`;
