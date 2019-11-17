import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import img from '../images/naccc.png'
import { Contact } from './Contact'
import { Home } from './Home'
import { Nav } from './Nav'
import { Sponsors } from './Sponsors'

export const App: React.FC = () => {
    return <Router>
        <a className="logo" href="/"><img src={ img } alt='NACCC 2020'/></a>
        <Nav/>
        <Route path="/" component={ Home } exact/>
        <Route path="/sponsorship" component={ Sponsors }/>
        <Route path="/contact" component={ Contact }/>
    </Router>
}
