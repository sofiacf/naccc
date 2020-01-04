import { render } from '@testing-library/react'
import React from 'react'
import { App } from '../app/components/App'

it('shows the home page', () => {
    const  { getByText } = render(<App/>)
    getByText('NACCC 2020')
    getByText('LABOR DAY WEEKEND')
    getByText('BOSTON, MA')
})
