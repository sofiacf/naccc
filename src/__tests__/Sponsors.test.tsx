import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Sponsors } from '../app/pages/Sponsors'

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

it('handles in kind donations', () => {
    const { getByText, getByLabelText, getByDisplayValue } = render(<Sponsors/>)
    getByText('For in-kind donations, reach out and get in touch with us')
    const input = getByLabelText('Caps')
    fireEvent.click(input)
    getByText('Donate in-kind')
    getByText('Sponsoring caps')
    fireEvent.change(getByLabelText('Name*'), { target: { value: 'Little Bobby Tables' } })
    getByDisplayValue('Little Bobby Tables')
    fireEvent.change(getByLabelText('Business'), { target: { value: 'Caps, Inc.' } })
    getByDisplayValue('Caps, Inc.')
    fireEvent.change(getByLabelText('Email*'), { target: { value: 'bobby@caps.com' } })
    getByDisplayValue('bobby@caps.com')
    fireEvent.change(getByLabelText('Message*'), { target: { value: 'We will send some cool stuff to the BBMA soon.' } })
    getByDisplayValue('We will send some cool stuff to the BBMA soon.')
})
