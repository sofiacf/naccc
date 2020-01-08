import * as React from 'react'
import { useEffect, useState } from 'react'
import hancock from '../images/hancock.png'
import { Background } from './Background'

export const Test: React.FC = () => {
    const [text, setText] = useState('not ready yet')
    useEffect(() => {
        fetch('http://localhost:8080/test')
            .then(response => response.text())
            .then(setText)
    }, [])
    return <>
        <Background src={ hancock }/>
        <header>{ text }</header>
        <main>
            <div>{ text }</div>
        </main>
    </>
}
