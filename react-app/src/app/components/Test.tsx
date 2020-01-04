import * as React from 'react'
import { useEffect, useState } from 'react'

export const Test: React.FC = () => {
    const [text, setText] = useState('not ready yet')
    useEffect( () => {
        fetch('http://localhost:8080/test')
            .then(response => response.text())
            .then(setText)
    }, [])
    return <div>{ text }</div>
}
