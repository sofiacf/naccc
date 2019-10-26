import '../style/App.css'
import React from 'react'
import { Nav } from './Nav'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Home } from './Home'
import { About } from './About'
import { Sponsors } from './Sponsors'
import { Contact } from './Contact'

export const App: React.FC = () => <div className="app">
    <Router>
        <Nav/>
        <Route path="/" component={ Home } exact/>
        <Route path="/about" component={ About }/>
        <Route path="/sponsors" component={ Sponsors }/>
        <Route path="/contact" component={ Contact }/>
    </Router>
</div>
