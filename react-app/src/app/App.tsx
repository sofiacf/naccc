import React, { useState } from 'react'
import Helmet from 'react-helmet'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import { Background } from './components/Background'
import { Nav } from './components/Nav'
import { Test } from './components/Test'
import hancock from './images/hancock.png'
import { Contact } from './pages/Contact'
import { Home } from './pages/Home'
import { Registration } from './pages/Registration'
import { Sponsors } from './pages/Sponsors'

// eslint-disable-next-line @typescript-eslint/no-unused-vars
export const AppContext = React.createContext((backgroundSrc: string) => {
    return
})

export function App(): JSX.Element {
    const [backgroundSrc, setBackgroundSrc] = useState(hancock)
    const description = 'The North American Cycle Courier Championship is coming to Boston! Labor Day Weekend, 2020.'
    return <AppContext.Provider value={ (backgroundSrc): void => {
        setBackgroundSrc(backgroundSrc)
    } }>
        <Background src={ backgroundSrc }/>
        <Router>
            <Helmet><title>NACCC 2020</title>
                <meta name='description' content={ description }/>
            </Helmet>
            <Nav/>
            <Route path='/' component={ Home } exact/>
            <Route path='/sponsorship' component={ Sponsors }/>
            <Route path='/contact' component={ Contact }/>
            <Route path='/register' component={ Registration }/>
            <Route path='/test' component={ Test }/>
        </Router>
    </AppContext.Provider>
}
