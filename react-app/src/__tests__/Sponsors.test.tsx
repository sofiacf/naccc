import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Sponsors } from '../app/components/Sponsors'

it('shows sponsorship options page', () => {
    const { getByText, getByLabelText, getByAltText, queryByAltText } = render(<Sponsors/>)
    getByText('Become a sponsor!')
    getByText('Purchase an ad in the event program!')
    getByText('Main Race Sponsorship')
    getByText('Event Sponsorship')
    getByText('Registration Sponsorship')
    getByText('Merch Sponsorship')
    getByText('In Kind Sponsorship')
    expect(queryByAltText('Sponsor the NACCC!')).toBeNull()
    const input = getByLabelText('Racer numbers - $144')
    fireEvent.click(input)
    getByText('Total:')
    getByText('$144')
    getByAltText('Sponsor the NACCC!')
    getByText('You can always ', { exact: false })
    getByText('with any questions or ideas.', { exact: false })
})
