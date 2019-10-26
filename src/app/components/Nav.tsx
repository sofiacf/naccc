import '../style/Nav.css'
import React from 'react'
import { NavLink } from 'react-router-dom'

const getListItem = (el: JSX.Element, key: string): JSX.Element => <li key={ key }> { el } </li>
const getNavLink = (page: string): JSX.Element => <NavLink to={ `/${ page.toLowerCase() }` }> { page } </NavLink>
const getNavLinkLi = (page: string): JSX.Element => getListItem(getNavLink(page), page)

const pages: string[] = ['About', 'Sponsors', 'Shop', 'Contact']
const shopLink = <a href='https://bbma.bigcartel.com/'> Shop </a>
const links = [getNavLinkLi(pages[0]), getNavLinkLi(pages[1]), getListItem(shopLink, pages[2]), getNavLinkLi(pages[3])]

export const Nav: React.FC = () => <nav>
    <ul>{ links }</ul>
</nav>
