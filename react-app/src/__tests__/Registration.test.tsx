import { fireEvent, render } from '@testing-library/react'
import React from 'react'
import { Registration } from '../app/pages/Registration'

it('renders', () => {
    const { getByText, getByLabelText, getByDisplayValue } = render(<Registration/>)
    fireEvent.change(getByLabelText('First name*'), 'Bobby')
    fireEvent.change(getByLabelText('Last name*'), 'Messenger')
    fireEvent.change(getByLabelText('Birthdate*'), '12-01-1990')
    fireEvent.change(getByLabelText('Phone*'), '555-555-5555')
    fireEvent.change(getByLabelText('Email*'), 'fuck@you.com')
    fireEvent.change(getByLabelText('Callsign/alt name'), 'Drop Table Messengers')
    fireEvent.change(getByLabelText('Team/company'), 'Kwik-E-Delivery')
    fireEvent.change(getByText('Working messenger?*'), 'Recovered')
    fireEvent.change(getByLabelText('City*'), 'Boston')
    getByText('Gender')
    getByText('Racer number')
    getByText('Shirt size*')
    getByLabelText('Emergency contact name*')
    getByLabelText('Emergency contact phone*')
    getByDisplayValue('continue')
})
