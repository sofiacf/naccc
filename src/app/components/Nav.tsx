import React from 'react'
import { NavLink } from 'react-router-dom'

export const Nav: React.FC = () => <nav title="navigation">
    <ul>
        <li><NavLink to='/sponsorships'>SPONSORSHIP</NavLink></li>
        <li><NavLink to='/contact'>CONTACT</NavLink></li>
        <li><a key="Shop" href='https://bbma.bigcartel.com/'>MERCH</a></li>
    </ul>
</nav>
