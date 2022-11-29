import styled from 'styled-components'
import { Link as LinkR} from 'react-router-dom'
export const Nav = styled.nav`
  background: #4cbde2;
  height: 80px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1rem;
  position: sticky;

  @media screen and (max-width: 960px) {
    transition: 0.8s all ease;
  }
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: space-between;
  height: 80px;
  z-index: 1;
  width: 100%;
  padding: 0 24px;
  max-width: 1100px;
`
export const NavLogo = styled(LinkR)`
  color: #FFF;
  justify-content: flex-start;
  cursor: pointer;
  font-size: 1.25rem;
  display: flex;
  align-items: center;
  margin-left: 24px;
  font-weight: bold;
  text-decoration: none;
`
export const Hamburger = styled.div`
  display:none;
  @media screen and (max-width: 768px){
    display: block;
    position: absolute;
    color: #fff;
    top: 0;
    right: 0;
    transform: translate(-100%, 60%);
    font-size: 1.8rem;
    cursor: pointer;
  }
    `
export const NavMenu = styled.ul`
  display: flex;
  align-items: center;
  list-style: none;
  text-align: center;
  margin-right: -22px;
  
  @media screen and (max-width: 768px){
    display: none;
  }
    `
export const NavItems = styled.li`
    
    `
export const NavLink = styled(LinkR)`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative;
  
`
export const NavLinkCatalog = styled.li`
    color: #fff;
    display: flex;
    align-items: center;
    text-decoration: none;
    font-size: 18px;
    padding: 0 1rem;
    height: 100%;
    cursor: pointer;
    position: relative;
  
`
export const NavBtns = styled.div`
     display: flex;
     
`
export const NavBtn = styled.nav`
    display: flex;
    align-items: center;
    margin-right: 10px;
  
  
    @media screen and (max-width: 768px){
      display: none;
    }
`



export const NavBtnLink = styled(LinkR)`
  background: rgba(36, 46, 56, 0.85);
  color: #2bb2d2;
  border-radius: 50px;
  white-space: nowrap;
  padding: 10px 22px;
  text-decoration: none;
  font-size: 18px;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;

  &:hover {
    transition: all 0.2s ease-in-out;
    background: rgba(76, 97, 116, 0.85);
    color: #77cfe7;
  }
`