import React from 'react';
import { HeaderContainer, HeaderImage, StyledLink } from '../../styles/StyledComponents';

function DesktopNav({profileImage, handleClick, selection}){
    return (
        <HeaderContainer>
            <HeaderImage src={profileImage}></HeaderImage>
            <nav>
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
            </nav>
        </HeaderContainer>
    );
}

export default DesktopNav;