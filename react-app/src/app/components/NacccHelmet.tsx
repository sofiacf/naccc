import React from 'react'
import Helmet from 'react-helmet'

export const NacccHelmet: React.FC<{ title: string; description: string }> = props => <Helmet>
    <title>NACCC | { props.title }</title>
    <meta name='description' content={ props.description }/>
</Helmet>
