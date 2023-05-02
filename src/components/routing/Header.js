import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import Logo from "../../assets/logo1.png";

const UnorderList = styled.ul`
width: 400px;
display: flex;
flex-direction: row;
justify-content: space-between;
`;

const ListItem= styled.li`
`;

const NavItem= styled(NavLink)`
    color: var(--color-light);
`;

const NavBar = styled.div`
  position: sticky;
  z-index: 2;
  max-width: 1500px;
  width: 100%;
  margin: auto;
  display: flex;
  align-items: center;
  padding: 37px 100px;
  justify-content:space-between;
`;

function Header() {
  return (
    <NavBar>
      <img src={Logo} width={50} height={50}></img>
      <UnorderList >
        <ListItem>
          <NavItem to="/">Home</NavItem>
        </ListItem>
        <ListItem>
          <NavItem to="#about">About</NavItem>
        </ListItem>
        <ListItem>
          <NavItem to="/profile">Profile</NavItem>
        </ListItem>
        <ListItem>
          <NavItem to="/contactus">Contact Us</NavItem>
        </ListItem>
      </UnorderList>
    </NavBar>
  );
}

export default Header;
