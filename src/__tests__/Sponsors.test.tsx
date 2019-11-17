import React from 'react'
import { render, unmountComponentAtNode } from 'react-dom'
import { Sponsors } from '../app/components/Sponsors'

const el = document.createElement('div')
const renderSponsors = (): void => render(<Sponsors/>, el)
const unmount = (): boolean => unmountComponentAtNode(el)

beforeEach(renderSponsors)
afterEach(unmount)

it('shows sponsor page', () => {
    const header = el.getElementsByTagName('H2')[0]
    expect(header.innerHTML).toEqual('Become a sponsor!')
})

it('shows sponsor options', () => {
    const form = el.getElementsByTagName('FORM')[0]
    expect(form.getElementsByTagName('LEGEND')).toHaveLength(5)
})