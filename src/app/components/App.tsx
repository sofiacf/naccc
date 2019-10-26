import React from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'

import { Nav } from './Nav'
import { Home } from './Home'
import { About } from './About'
import { Sponsors } from './Sponsors'
import { Contact } from './Contact'

export const App: React.FC = () => <Router>
    <Nav/>
    <main role="main">
        <Route path="/" component={ Home } exact/>
        <Route path="/about" component={ About }/>
        <Route path="/sponsors" component={ Sponsors }/>
        <Route path="/contact" component={ Contact }/>
    </main>
</Router>
