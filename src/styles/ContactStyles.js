import styled from 'styled-components';
import theme from './theme';

export const Container = styled.section`
    background-color: ${theme.colors.darkGrey};
    height: calc(100vh - 85px);
    width: 100%;
    overflow: auto;
    .page-content {
        margin: 0 auto;
        margin-top: 50px;
        width: 90%;
        max-width: 800px;
        display: flex;
        justify-content: space-around;
        .text-container{
            width: 300px;
        }
        h1, p {
            font-family: ${theme.font};
            color: ${theme.colors.white};
        }
        h1 {
            font-size: 1.6rem;
            font-weight: bold;
        }
        p {
            font-size: 1.3rem;
            line-height: 25px;
        }
        h1 {
            margin-bottom: 10px;
        }
        .margin-bottom {
            margin-bottom: 30px;
        }
        .bar {
            width: 102px;
            height: 1px;
            background-color: ${theme.colors.pink};
            margin-bottom: 20px;
        }
        .long {
            width: 160px;
        }
        ${theme.breakpoints.tablet}{
            margin-top: 20px;
            flex-direction: column;
            align-items: center;
            justify-content: flex-start;
            padding-bottom: 200px;

        }
    }
`;

export const Form = styled.form`
    width: 300px;
    display: flex;
    flex-direction: column;
    label {
        color: white;
        font-family: ${theme.font};
        margin-bottom: 10px;
        font-size: 1.3rem;
    }
    input {
        height: 30px;
        margin-bottom: 20px;
        font-size: 1.1rem;
        font-family: ${theme.font};
        padding-left: 5px;
    }
    textarea {
        resize: none;
        height: 100px;
        font-size: 1.1rem;
        font-family: ${theme.font};
        padding-left: 5px;
    }
    .button-container {
        margin-top: 30px;
        margin-top: ${props => props.error ? '10px' : '30px'};
        display: flex;
        width: 100%;
        justify-content: flex-end;
        .button {
            width: 150px;
            height: 40px;
            font-size: 1.3rem;
            color: ${theme.colors.white};
            display: flex;
            justify-content: center;
            align-items: center;
            font-family: ${theme.font};
            background-color: ${theme.colors.lightBlue};
            cursor: pointer;
            &:hover{
                color: ${theme.colors.lightBlue};
                background-color: ${theme.colors.white};
                transition: color, background-color .5s ease;
            }
        }
    }
    p.error {
        color: ${theme.colors.pink};
        margin-top: 10px;
        text-align: right;
    }
    ${theme.breakpoints.tablet}{
        margin-top: 80px;
    }
`;
