import '../style/Nav.css'
import img from '../images/naccc.png'
import React from 'react'
import { NavLink } from 'react-router-dom'

function getNavLink(page: string): JSX.Element {
    return <NavLink key={ page } to={ `/${ page.toLowerCase() }` }>{ page }</NavLink>
}

const shopLink = <a key="Shop" href='https://bbma.bigcartel.com/'>Shop</a>
const links = [getNavLink('About'), getNavLink('Sponsors'), shopLink, getNavLink('Contact')]

export const Nav: React.FC = () => <nav title="navigation">
    <a href="/"><img src={ img } alt='NACCC 2020'/></a>
    { links }
</nav>
