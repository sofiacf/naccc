import { render, unmountComponentAtNode } from 'react-dom'
import React from 'react'
import { Contact } from '../app/components/Contact'

it('shows the contact message', () => {
    const div = document.createElement('div')
    render(<Contact/>, div)
    const contact = div.getElementsByClassName('contact')[0]
    expect(contact.innerHTML).toEqual('<p>Please direct any inquiries to <a href="mailto:boston@naccc2020.com">boston@naccc2020.com</a></p>')
    unmountComponentAtNode(div)
})
