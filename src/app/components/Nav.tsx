import React from 'react'
import { NavLink } from 'react-router-dom'

function getNavLink(page: string): JSX.Element {
    return <li><NavLink key={ page } to={ `/${ page.toLowerCase() }` }>{ page }</NavLink></li>
}

const shopLink = <li><a key="Shop" href='https://bbma.bigcartel.com/'>Shop</a></li>
const links = [getNavLink('About'), getNavLink('Sponsors'), shopLink, getNavLink('Contact')]

export const Nav: React.FC = () => <nav title="navigation">
    <ul> { links } </ul>
</nav>
