import '../style/Nav.css'
import React from 'react'
import { Link } from 'react-router-dom'

const pages: string[] = ['About', 'Sponsors', 'Shop', 'Contact']
const links: JSX.Element[] = pages.map(page => <li key={ page }>
    <Link to={ `/${ page.toLowerCase() }` } key={ page }> { page } </Link>
</li>)

export const Nav: React.FC = () => <nav>
    <ul>{ links }</ul>
</nav>
