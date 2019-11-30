import { Nav } from '../app/components/Nav'
import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'

it('shows nav options', () => {
    const { getByText } = render(<BrowserRouter><Nav/></BrowserRouter>)
    getByText('SPONSORSHIP')
    getByText('CONTACT')
    getByText('MERCH')
})
