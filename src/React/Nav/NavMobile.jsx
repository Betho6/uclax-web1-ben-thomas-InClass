import React, { useState } from 'react';
import styled from 'styled-components';
import Nav from './Nav.jsx';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
    faBars, 
} from '@fortawesome/free-solid-svg-icons';

const NavMobile = () => {
const [showMobileMenu, showMobileMenuUpdate] = useState(false);

const handleHamburgerToggle = () => {
    showMobileMenuUpdate(!showMobileMenu);
    console.log( 'you clicked me. ', showMobileMenu);
}
    return (
        <NavMobileStyled className='NavMobile'>
            <div className="hamburger"
            onClick={ handleHamburgerToggle }
            >
                <FontAwesomeIcon icon={faBars}/>
            </div>
            {
                showMobileMenu &&
            
            <div className="nav-wrapper">
                <Nav/> 
            </div>
            }
        </NavMobileStyled>
    );
}

export default NavMobile;

const NavMobileStyled = styled.nav`
.hamburger {
    position: fixed;
    top: 0px;
    right: 0px;
    z-index: 1001;

    width: 50px;
    height: 50px;

    background-color: teal;

    text-align: center;
    padding-top: 9px;
    cursor: pointer;

    svg{
        font-size: 30px;
        color: white;
    }
}

.nav-wrapper {
    background-color: #ffff;

    position: fixed;
    top: 0px;
    bottom: 0px;
    right: 0px;
    left: 0px;

    z-index: 1000;

    .Nav{
        margin-top: 70px;
        outline: solid 1px black;
    }
    a {
        display: block;
        background-color: teal;
        color: white;
        text-decoration: none;
        padding: 10px;
        margin-bottom: 5px;

        &.active{
            background-color: #015150;
        }

        &:hover {
            background-color: #02aca9;
            color: #015150;
        }
    }
}
`;