import { render, unmountComponentAtNode } from 'react-dom'
import React from 'react'
import { Contact } from '../app/components/Contact'

it('shows the contact message', () => {
    const div = document.createElement('div')
    render(<Contact/>, div)
    const contact = div.getElementsByClassName('contact')[0]
    expect(contact.innerHTML).toEqual('You can reach us by email at boston@naccc2020.com')
    unmountComponentAtNode(div)
})
