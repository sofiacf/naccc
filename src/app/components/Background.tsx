import React from 'react'

interface Props {
    src: string;
}

export function Background(props: Props) {
    const { src } = props
    return <div
        className='background'
        style={ { background: `linear-gradient(#0c234080, #0c234080), url(${ src })` } }
    >
    </div>
}
