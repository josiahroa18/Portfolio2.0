import React, { useState } from 'react';
import { HeaderContainer, Nav, HeaderImage, StyledLink } from '../styles/StyledComponents';
import ProfileImage from '../assets/profile_image.jpg';

function Header(){
    const [ selection, setSelection ] = useState(0);

    function handleClick(e){
        setSelection(e.target.id * 1)
    }

    return (
        <HeaderContainer>
            <HeaderImage src={ProfileImage}></HeaderImage>
            <Nav>
                <StyledLink 
                    to='/' 
                    id={0} 
                    onClick={handleClick}
                    selected={selection === 0 ? '#E3266D' : '#FFFFFF'}
                >Home</StyledLink>
                <StyledLink 
                    to='/projects' 
                    id={1}
                    onClick={handleClick}
                    selected={selection === 1 ? '#E3266D' : '#FFFFFF'}
                >Projects</StyledLink>
                <StyledLink 
                    to='/skills' 
                    id={2}
                    onClick={handleClick}
                    selected={selection === 2 ? '#E3266D' : '#FFFFFF'}
                >Skills</StyledLink>
                <StyledLink 
                    to='/about' 
                    id={3}
                    onClick={handleClick}
                    selected={selection === 3 ? '#E3266D' : '#FFFFFF'}
                >About</StyledLink>
                <StyledLink 
                    to='/contact'
                    id={4}
                    onClick={handleClick}
                    selected={selection === 4 ? '#E3266D' : '#FFFFFF'}
                >Contact</StyledLink>
                <StyledLink 
                    to='/resume'
                    id={5}
                    onClick={handleClick}
                    selected={selection === 5 ? '#E3266D' : '#FFFFFF'}
                >Resume</StyledLink>
            </Nav>
        </HeaderContainer>
    );
}

export default Header;