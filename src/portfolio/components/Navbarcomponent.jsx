import React from 'react';

import { AiOutlineHome } from 'react-icons/ai';
import { NavLink } from "react-router-dom";
import { CgMail } from 'react-icons/cg';
import {CgProfile} from 'react-icons/cg';
import {BiArchiveOut} from 'react-icons/bi';
import {CiSettings} from 'react-icons/ci';
import styled from 'styled-components';

const NavList= styled.div `
    flex: auto;
    text-align: center;
    /* background-color: var(--color-primary); */
    border: 1px solid var(--color-light);
    border-radius: 50px;
    
`

const UnorderList = styled.ul`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    margin: 20px 0px;
    gap: 20px;
`;

const NavItem= styled(NavLink)`
    color: var(--color-light);
`;


const navRoute=[
    {
        key:"Home",
        icon:<AiOutlineHome  size={20}/>,
        path:"/"
    },
   

    {
        key:"About",
        icon:<CgProfile  size={20}/>,
        path:"/about"
    },

    {
        key:"Portfolio",
        icon:<BiArchiveOut size={20}/>,
        path:"/portfolio"
    },

    {
        key:"Services",
        icon:<CiSettings  size={20}/>,
        path:"/services"
    },
    {
        key:"Contact",
        icon:<CgMail size={20}/>,
        path:"/contact"
    },
];

function Navbarcomponent() {
   const maproute = navRoute.map((route)=>{
        return (<li key={route.key}>
            <NavItem to={route.path} key={route.key}>
            {route.icon}
            </NavItem>
        </li>
        );
   });
  return (
   <NavList>
    <UnorderList>
        {maproute}
    </UnorderList>
      
   </NavList>
  )

}

export default Navbarcomponent