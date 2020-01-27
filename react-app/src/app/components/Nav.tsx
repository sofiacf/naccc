import React from 'react'
import { NavLink } from 'react-router-dom'
import img from '../images/naccc.png'
import './style/Nav.css'

export const Nav: React.FC = () => <nav title='navigation'>
    <NavLink className='logo' to='/'><img src={ img } alt='NACCC 2020'/></NavLink>
    <ul>
        <li><NavLink id='sponsor' to='/sponsorship'>SPONSOR US</NavLink></li>
        <li><a id='merch' href='https://bbma.bigcartel.com/'>BUY STUFF</a></li>
        <li><NavLink id='register' to='/registration'>REGISTER</NavLink></li>
        <li><NavLink id='contact' to='/contact'>CONTACT US</NavLink></li>
    </ul>
</nav>
