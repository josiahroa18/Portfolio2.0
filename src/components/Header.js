import React, { useState, useEffect } from 'react';
import ProfileImage from '../assets/profile_image.jpg';
import DesktopNav from './NavBar/DesktopNav';
import MobileNav from './NavBar/MobileNav';
import { useMediaQuery } from 'react-responsive';
import { useHistory } from 'react-router-dom';

function Header(){
    const [ selection, setSelection ] = useState(0);
    const history = useHistory();
    console.log(history);

    function handleClick(e){
        setSelection(e.target.id * 1)
    }

    useEffect(() => {
        switch(history.location.pathname){
            case '/':
                setSelection(0);
                break;
            case '/projects':
                setSelection(1);
                break;
            case '/skills':
                setSelection(2);
                break;
            case '/about':
                setSelection(3);
                break;
            case '/contact':
                setSelection(4);
                break;
            case '/resume':
                setSelection(5);
                break;
        }
    }, [])

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