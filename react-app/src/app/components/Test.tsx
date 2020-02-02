import * as React from 'react'
import { useEffect, useState } from 'react'
import hancock from '../images/hancock.png'
import { Background } from './Background'

export const Test: React.FC = () => {
    const [text, setText] = useState('not ready yet')
    useEffect(() => {
        fetch('/registrations/')
            .then(response => response.text())
            .then(setText)
    }, [])
    return <>
        <Background src={ hancock }/>
        <main>
            <div>{ text }</div>
        </main>
    </>
}
