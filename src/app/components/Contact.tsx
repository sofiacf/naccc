import React from 'react'
import { Background } from './Background'
import hancock from '../images/hancock.png'

export const Contact: React.FC = () => <div className='contact'>
    <Background src={ hancock }/>
    <p>Please direct any inquiries to <a href="mailto:boston@naccc2020.com">boston@naccc2020.com</a></p>
</div>
