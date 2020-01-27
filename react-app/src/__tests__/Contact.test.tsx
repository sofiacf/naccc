import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Contact } from '../app/pages/Contact'

it('shows the contact message', () => {
    const { getByLabelText, getByText } = render(<Contact/>)
    getByText('Questions? Other stuff? Drop us a line!')

    const email = getByLabelText('Email*') as HTMLInputElement
    fireEvent.change(email, { target: { value: 'react@naccc2020.com' } })
    expect(email.validity.valid).toBe(true)

    const name = getByLabelText('Name*') as HTMLInputElement
    fireEvent.change(name, { target: { value: 'Dirk' } })
    expect(name.value).toBe('Dirk')

    const business = getByLabelText('Business') as HTMLInputElement
    fireEvent.change(business, { target: { value: 'Acme' } })
    expect(business.value).toBe('Acme')

    getByLabelText('Send')
})
