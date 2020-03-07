import React, { useState } from 'react';
import ProfileImage from '../assets/profile_image.jpg';
import DesktopNav from './NavBar/DesktopNav';
import MobileNav from './NavBar/MobileNav';
import { useMediaQuery } from 'react-responsive';

function Header(){
    const [ selection, setSelection ] = useState(0);

    function handleClick(e){
        setSelection(e.target.id * 1)
    }

    const isDesktop = useMediaQuery({
        query: '(min-width: 800px)'
    })
    const isTablet = useMediaQuery({
        query: '(max-width: 799px)'
    })

    return (
        <div>
            {isDesktop && <DesktopNav profileImage={ProfileImage} handleClick={handleClick} selection={selection}/>}
            {isTablet && <MobileNav profileImage={ProfileImage} handleClick={handleClick} selection={selection}/>}
        </div>
    )
}

export default Header;