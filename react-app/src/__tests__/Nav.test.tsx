import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import { Nav } from '../app/components/Nav'

it('shows nav options', () => {
    const { getByText, getByRole } = render(<BrowserRouter><Nav/></BrowserRouter>)
    getByRole('navigation')
    getByText('SPONSOR US')
    getByText('CONTACT US')
    getByText('BUY STUFF')
    getByText('REGISTER')
})
