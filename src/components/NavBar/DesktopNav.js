import React from 'react';
import { HeaderContainer, StyledLink } from '../../styles/GlobalStyles';

function DesktopNav({profileImage, handleClick, selection}){
    return (
        <HeaderContainer>
            <img src={profileImage} alt='Josiah Roa'></img>
            <nav>
                <StyledLink 
                    to='/' 
                    id={0} 
                    onClick={handleClick}
                    selected={selection === 0}
                >Home</StyledLink>
                <StyledLink
                    to='/projects' 
                    id={1}
                    onClick={handleClick}
                    selected={selection === 1}
                >Projects</StyledLink>
                <StyledLink 
                    to='/skills' 
                    id={2}
                    onClick={handleClick}
                    selected={selection === 2}
                >Skills</StyledLink>
                <StyledLink 
                    to='/about' 
                    id={3}
                    onClick={handleClick}
                    selected={selection === 3}
                >About</StyledLink>
                <StyledLink 
                    to='/contact'
                    id={4}
                    onClick={handleClick}
                    selected={selection === 4}
                >Contact</StyledLink>
                <StyledLink 
                    to='/resume'
                    id={5}
                    onClick={handleClick}
                    selected={selection === 5}
                >Resume</StyledLink>
            </nav>
        </HeaderContainer>
    );
}

export default DesktopNav;