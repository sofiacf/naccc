import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { App } from '../app/components/App'

const el = document.createElement('div')

const renderApp = () => render(<App/>, el)
const unmount = () => unmountComponentAtNode(el)

beforeEach(renderApp)
afterEach(unmount)

it('shows the home page', () => {
    const home: Element = el.getElementsByClassName('home')[0]
    expect(home.tagName).toEqual('MAIN')
    expect(home.innerHTML).toMatch('<h1>NACCC 2020 BOSTON</h1><h2>LABOR DAY WEEKEND 2020</h2>')
})

it('shows the nav options', () => {
    expect(el.getElementsByTagName('nav')).toHaveLength(1)
    expect(el.getElementsByTagName('a')).toHaveLength(4)
})
