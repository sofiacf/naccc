import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { App } from '../app/components/App'

it('shows the home page', () => {
    const el = document.createElement('div')
    render(<App/>, el)
    const home: Element = el.getElementsByClassName('home')[0]
    expect(home.innerHTML).toMatch('<h1>NACCC 2020 BOSTON</h1><h2>LABOR DAY WEEKEND 2020</h2>')
    expect(el.getElementsByTagName('nav')).toHaveLength(1)
    expect(el.getElementsByTagName('a')).toHaveLength(5)
    unmountComponentAtNode(el)
})
