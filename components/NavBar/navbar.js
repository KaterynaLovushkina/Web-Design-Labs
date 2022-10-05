import React from 'react';
import {FiAlignJustify}  from 'react-icons/fi'
import {FaPlane}  from 'react-icons/fa'

import {Nav, NavbarContainer, NavLogo, NavMenu, NavItems, NavLink, Hamburger, NavBtn, NavBtnLink, NavBtns} from './NavbarElements'
import './navbar.css'
// rsc
const Navbar = ({toggle}) => {
    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <h1>TRVL <span></span><FaPlane/></h1>

                    </NavLogo>
                    <Hamburger onClick ={toggle}>
                        <FiAlignJustify/>
                    </Hamburger>
                    <NavMenu>

                        <NavItems>
                            <NavLink className ='nav_link' to='book'>Book</NavLink>
                        </NavItems>
                        <NavItems>
                            <NavLink className ='nav_link' to='about'>About</NavLink>
                        </NavItems>
                        <NavItems>
                            <NavLink className ='nav_link' to='reviews'>Reviews</NavLink>
                        </NavItems>
                    </NavMenu>
                    <NavBtns>
                        <NavBtn>
                            <NavBtnLink className={'sign_in'} to='signin'>Sign In</NavBtnLink>
                        </NavBtn>
                        <NavBtn>
                            <NavBtnLink className={'sign_up'} to='signup'>Sign Up</NavBtnLink>
                        </NavBtn>
                    </NavBtns>


                </NavbarContainer>
            </Nav>
        </>
    );
};

export default Navbar;

