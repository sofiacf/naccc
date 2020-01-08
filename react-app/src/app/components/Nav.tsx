import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Nav.css'

export const Nav: React.FC = () => <nav title="navigation">
    <ul>
        <li><NavLink id='sponsor' to='/sponsorship'>SPONSOR US</NavLink></li>
        <li><NavLink id='contact' to='/contact'>CONTACT US</NavLink></li>
        <li><a id='merch' href='https://bbma.bigcartel.com/'>BUY STUFF</a></li>
    </ul>
</nav>
