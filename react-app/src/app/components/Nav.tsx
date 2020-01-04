import React from 'react'
import { NavLink } from 'react-router-dom'
import '../Nav.css'

export const Nav: React.FC = () => <nav title="navigation">
    <ul>
        <li><NavLink id='sponsor' to='/sponsorship'>SPONSORSHIP</NavLink></li>
        <li><NavLink id='contact' to='/contact'>CONTACT</NavLink></li>
        <li><a id='merch' href='https://bbma.bigcartel.com/'>MERCH</a></li>
    </ul>
</nav>
