import React from 'react'

interface Props {
    src: string;
}

export const Background: React.FC<Props> = props =>
    <div className='background' style={ { background: `linear-gradient(#0248, #0248), url(${ props.src })` } }/>
