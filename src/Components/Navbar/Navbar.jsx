import React from 'react'
import './Navbar.scss'
import { Icon } from '@iconify/react';

const Navbar = () => {
   return (
      <nav className="navbar">
         <Icon icon="simple-icons:nike" color="white" width="50" height="50" />
         <div>
            <ul>
               <li>MASCULINO</li>
               <li>FEMININO</li>
               <li>INFANTIL</li>
            </ul>
         </div>
         <Icon className="icon-hamburger" icon="icon-park-outline:hamburger-button" color="#fff" width="35" height="35" />
      </nav>
   )
}

export default Navbar
