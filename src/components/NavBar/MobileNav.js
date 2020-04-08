import React, { useState } from 'react';
import { Motion, spring } from 'react-motion';

import { HeaderContainer, MobileContainer, MobileNavContainer, StyledLink } from '../../styles/GlobalStyles';
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
                        <img src={profileImage} alt='Josiah Roa'></img>
                        <div className='hamburger-container'>
                            <HamburgerMenu
                                isOpen={open}
                                menuClicked={handleMenuClick}
                                color={theme.colors.white}
                            />
                        </div>
                    </MobileContainer>
                    <Motion
                        defaultStyle={{top: -300}}
                        style={{top: spring(open ? 80 : -300)}}
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
                                selected={selection === 0}
                                mobile='true'
                            >Home</StyledLink>
                            <StyledLink 
                                to='/projects' 
                                id={1}
                                onClick={(e) => {
                                    handleClick(e);
                                    handleMenuClick();
                                }}
                                selected={selection === 1}
                                mobile='true'
                            >Projects</StyledLink>
                            <StyledLink 
                                to='/skills' 
                                id={2}
                                onClick={(e) => {
                                    handleClick(e);
                                    handleMenuClick();
                                }}
                                selected={selection === 2}
                                mobile='true'
                            >Skills</StyledLink>
                            <StyledLink 
                                to='/about' 
                                id={3}
                                onClick={(e) => {
                                    handleClick(e);
                                    handleMenuClick();
                                }}
                                selected={selection === 3}
                                mobile='true'
                            >About</StyledLink>
                            <StyledLink 
                                to='/contact'
                                id={4}
                                onClick={(e) => {
                                    handleClick(e);
                                    handleMenuClick();
                                }}
                                selected={selection === 4}
                                mobile='true'
                            >Contact</StyledLink>
                            <StyledLink 
                                to='/resume'
                                id={5}
                                onClick={(e) => {
                                    handleClick(e);
                                    handleMenuClick();
                                }}
                                selected={selection === 5}
                                mobile='true'
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