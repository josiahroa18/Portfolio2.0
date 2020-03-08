import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';

import { HeaderContainer, HeaderImage, HamburgerContainer, MobileContainer, MobileNavContainer, StyledLink } from '../../styles/StyledComponents';
import HamburgerMenu from 'react-hamburger-menu';
import theme from '../../styles/theme';


function MobileNav({profileImage, handleClick, selection}){
    const [ open, setOpen ] = useState(false)

    function handleMenuClick(){
        setOpen(!open);
    }

    return (
        <Motion
            defaultStyle={{height: 80}}
            style={{height: spring(open ? 440 : 80)}}
        >
            {style => (
                <HeaderContainer expand={open} style={{height: style.height}}>
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
                <Motion
                    defaultStyle={{top: -200}}
                    style={{top: spring(open ? 80 : -200)}}
                >
                    {style => (
                        <MobileNavContainer open={open} style={{top: style.top}}>
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
                    )}
                </Motion>       
        </HeaderContainer>
            )}
        </Motion>
    )
}

export default MobileNav