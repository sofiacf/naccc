import { render } from '@testing-library/react'
import React from 'react'
import { Registration } from '../app/pages/Registration'

it('renders', () => {
    const { getByLabelText } = render(<Registration/>)
    getByLabelText('First Name')
    getByLabelText('Last Name')
    getByLabelText('Phone')
})
