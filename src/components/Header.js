import React from 'react';
import { Link } from 'react-router-dom';
import { HeaderContainer, Nav, HeaderImage } from '../styles/StyledComponents';
import ProfileImage from '../assets/profile_image.jpg';
import theme from '../styles/theme';

const linkStyle = {
    textDecoration: 'none',
    color: `${theme.colors.pink}`,
    margin: '0 20px',
    fontSize: '1.2rem',
    fontFamily: `${theme.font}`
}

function Header(){
    return (
        <HeaderContainer>
            <HeaderImage src={ProfileImage}></HeaderImage>
            <Nav>
                <Link style={linkStyle} to='/'>Home</Link>
                <Link style={linkStyle} to='/projects'>Projects</Link>
                <Link style={linkStyle} to='/skills'>Skills</Link>
                <Link style={linkStyle} to='/about'>About</Link>
                <Link style={linkStyle} to='/contact'>Contact</Link>
                <Link style={linkStyle} to='/resume'>Resume</Link>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;