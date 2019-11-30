import React from 'react'
import { App } from '../app/components/App'
import { render } from '@testing-library/react'

it('shows the home page', () => {
    const  { getByText } = render(<App/>)
    getByText('NACCC 2020 BOSTON')
    getByText('LABOR DAY WEEKEND 2020')
})
