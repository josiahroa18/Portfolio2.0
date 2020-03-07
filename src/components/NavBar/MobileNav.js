import React, { useState } from 'react';
import { HeaderContainer, HeaderImage, HamburgerContainer, MobileContainer, MobileNavContainer, StyledLink } from '../../styles/StyledComponents';
import HamburgerMenu from 'react-hamburger-menu';
import theme from '../../styles/theme';


function MobileNav({profileImage, handleClick, selection}){
    const [ open, setOpen ] = useState(false)

    function handleMenuClick(){
        setOpen(!open);
    }

    return (
        <HeaderContainer expand={open}>
            <MobileContainer>
                <HeaderImage src={profileImage}></HeaderImage>
                <HamburgerContainer>
                    <HamburgerMenu
                        isOpen={open}
                        menuClicked={handleMenuClick}
                        color={theme.colors.white}
                    />
                </HamburgerContainer>
            </MobileContainer>
            <MobileNavContainer open={open}>
                <StyledLink 
                    to='/' 
                    id={0} 
                    onClick={(e) => {
                        handleClick(e);
                        handleMenuClick();
                    }}
                    selected={selection === 0 ? '#E3266D' : '#FFFFFF'}
                    mobile
                >Home</StyledLink>
                <StyledLink 
                    to='/projects' 
                    id={1}
                    onClick={(e) => {
                        handleClick(e);
                        handleMenuClick();
                    }}
                    selected={selection === 1 ? '#E3266D' : '#FFFFFF'}
                    mobile
                >Projects</StyledLink>
                <StyledLink 
                    to='/skills' 
                    id={2}
                    onClick={(e) => {
                        handleClick(e);
                        handleMenuClick();
                    }}
                    selected={selection === 2 ? '#E3266D' : '#FFFFFF'}
                    mobile
                >Skills</StyledLink>
                <StyledLink 
                    to='/about' 
                    id={3}
                    onClick={(e) => {
                        handleClick(e);
                        handleMenuClick();
                    }}
                    selected={selection === 3 ? '#E3266D' : '#FFFFFF'}
                    mobile
                >About</StyledLink>
                <StyledLink 
                    to='/contact'
                    id={4}
                    onClick={(e) => {
                        handleClick(e);
                        handleMenuClick();
                    }}
                    selected={selection === 4 ? '#E3266D' : '#FFFFFF'}
                    mobile
                >Contact</StyledLink>
                <StyledLink 
                    to='/resume'
                    id={5}
                    onClick={(e) => {
                        handleClick(e);
                        handleMenuClick();
                    }}
                    selected={selection === 5 ? '#E3266D' : '#FFFFFF'}
                    mobile
                >Resume</StyledLink>
            </MobileNavContainer>
        </HeaderContainer>
    )
}

export default MobileNav