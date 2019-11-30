import React from 'react'
import { Contact } from '../app/components/Contact'
import { render } from '@testing-library/react'

it('shows the contact message', () => {
    const { getByText } = render(<Contact/>)
    getByText('Please direct any inquiries to')
})
