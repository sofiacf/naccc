import React from 'react'
import hancock from '../images/hancock.png'
import { Background } from './Background'

export const Home: React.FC = () => <>
    <Background src={ hancock }/>
    <header>
        <h2>NACCC 2020</h2>
    </header>
    <main>
        <h1>LABOR DAY WEEKEND</h1>
        <h1>BOSTON, MA</h1>
    </main>
</>
