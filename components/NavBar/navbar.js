import React, {useState} from 'react';
import {FiAlignJustify}  from 'react-icons/fi'
import {FaPlane}  from 'react-icons/fa'

import {Nav, NavbarContainer, NavLogo, NavMenu, NavItems, NavLink, NavLinkCatalog, NavBtn, NavBtnLink, NavBtns} from './NavbarElements'
import './navbar.css'
import {useNavigate} from "react-router-dom";
;

const Navbar = () => {
    const [destination, setDestination] = useState("")
    const [openDate, setOpenDate] = useState(false)
    const [date, setDate] = useState([
        {
            startDate: new Date(),
            endDate: new Date(),
            key: 'selection'
        }
    ]);
    const [openOptions, setOpenOptions] = useState(false)
    const [options, setOptions] = useState(
        {
            adult: 1,
            children: 0,
            room: 1
        }
    );
    const navigate = useNavigate()
    const handleSearch = () =>{
        navigate("/catalog", {state:{destination,date,options }})
    }

    return (
        <>
            <Nav>
                <NavbarContainer>
                    <NavLogo to='/'>
                        <h1>TRVL <span></span><FaPlane/></h1>
                    </NavLogo>
                    <NavMenu>
                        <NavItems>
                            <NavLinkCatalog className ='nav_link' onClick = {handleSearch} >Book</NavLinkCatalog>

                        </NavItems>
                        <NavItems>
                            <NavLink className ='nav_link'onClick = {handleSearch} >About</NavLink>
                        </NavItems>
                        <NavItems>
                            <NavLink className ='nav_link' to='/reviews'>Reviews</NavLink>
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

