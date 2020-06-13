import React, { useEffect } from 'react';

import VirusIcon from '../../assets/image/icon/virus-icon.svg';

const Header = () =>{

    const headerFixed = () =>{
        const navbar = document.querySelector('.logo');
        const scrollValue = window.scrollY;

        if(scrollValue > 3){
            navbar.classList.add('scroll');
        }else{
            navbar.classList.remove('scroll');
        }
    }


    useEffect(() =>{

        window.addEventListener('scroll', headerFixed);
        return () => window.removeEventListener('scroll', headerFixed);

    },[])

    return(
        <>
            <div className="logo">
                <img src={VirusIcon} alt=""/>
                <span>Covid-19 info</span>
            </div>
        </>
    )
}

export default Header;