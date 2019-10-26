import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { App } from '../app/components/App'

it('shows the home page', () => {
    const el = document.createElement('div')
    render(<App/>, el)
    const home: Element = el.getElementsByClassName('home')[0]
    expect(home.innerHTML).toMatchInlineSnapshot(
        '"<p>Welcome to NACCC 2020 Boston</p>' +
        '<p>Please direct any inquiries to boston@naccc2020.com</p>' +
        '<p>We can\'t wait to see you Labor Day weekend 2020!</p>"'
    )
    expect(el.getElementsByTagName('nav')).toHaveLength(1)
    expect(el.getElementsByTagName('a')).toHaveLength(4)
    unmountComponentAtNode(el)
})
