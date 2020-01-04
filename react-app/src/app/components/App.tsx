import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, NavLink, Route } from 'react-router-dom'
import hancock from '../images/hancock.png'
import img from '../images/naccc.png'
import { Background } from './Background'
import { Contact } from './Contact'
import { Home } from './Home'
import { Nav } from './Nav'
import { Sponsors } from './Sponsors'
import { Test } from './Test'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AppContext = React.createContext((backgroundSrc: string) => {
    return
})

export function App(): JSX.Element {
    const [backgroundSrc, setBackgroundSrc] = useState(hancock)
    const description = 'The North American Cycle Courier Championship is coming to Boston! Labor Day Weekend, 2020.'
    return <AppContext.Provider value={ backgroundSrc => { setBackgroundSrc(backgroundSrc) } }>
        <Background src={ backgroundSrc }/>
        <Router>
            <Helmet><title>NACCC 2020</title>
                <meta name='description' content={ description }/>
            </Helmet>
            <NavLink className='logo' to='/'><img src={ img } alt='NACCC 2020'/></NavLink>
            <Nav/>
            <Route path='/test' component={ Test } />
            <Route path='/' component={ Home } exact/>
            <Route path='/sponsorship' component={ Sponsors }/>
            <Route path='/contact' component={ Contact }/>
        </Router>
    </AppContext.Provider>
}
