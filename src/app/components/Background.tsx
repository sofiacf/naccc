import React from 'react'

interface Props {
    src: string;
}

export function Background(props: Props) {
    const { src } = props
    return <div className='background' style={ { background: `linear-gradient(#0248, #0248), url(${ src })` } }/>
}
