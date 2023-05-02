import React from 'react'
import { NavLink } from "react-router-dom";

function Header() {
  return (
    <div>
        <ul>
            <li>
                <NavLink to="/home">
                    Home
                </NavLink>
            </li>
           
            <li>
                <NavLink to="/about">
                    About
                </NavLink>
            </li>
            <li>
                <NavLink to="/profile">
                    Profile
                </NavLink>
            </li>
            <li>
                <NavLink to="/contactus">
                    Contact Us
                </NavLink>
            </li>
        </ul>
    </div>
  )
}

export default Header