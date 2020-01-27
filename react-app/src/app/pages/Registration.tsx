import React, { useContext } from 'react'
import { AppContext } from '../App'
import { FieldsetProps, Form } from '../components/Form'
import { NacccHelmet } from '../components/NacccHelmet'
import MaxPackage from '../images/max-package.png'

const registrationFields: FieldsetProps[] = [
    {
        legend: 'Personal Info',
        fields: [
            { label: 'First name', id: 'firstName' },
            { label: 'Last name', id: 'lastName' },
            { label: 'Birthday', type: 'date', min: '01/01/1920', max: '12/31/2002' }
        ]
    }, {
        legend: 'Contact Info',
        fields: [
            { label: 'Email', type: 'email' },
            { label: 'Phone', type: 'tel' }
        ]
    }, {
        legend: 'Rider Info',
        fields: [
            {
                label: 'Working messenger?',
                id: 'isWorkingMessenger',
                type: 'select',
                options: ['Yes', 'Recovered', 'No']
            },
            { label: 'City' },
            { label: 'Team/Company ', optional: true },
            { label: 'Callsign', optional: true }
        ]
    }, {
        legend: 'Racing Info',
        fields: [
            { label: 'Gender', type: 'select', options: ['female', 'male', 'nonbinary', 'nah'] },
            { label: 'WTNB racer?', type: 'checkbox' },
            { label: 'Pronouns' },
            { label: 'Racer number', type: 'number', min: 0 }
        ]
    }, {
        legend: 'Other Stuff',
        fields: [
            {
                label: 'Need housing?', type: 'select', options: ['yes, just for me', 'yes, for me and a pal', 'yes,' +
                ' for me and all my bffs', 'no']
            }
        ]
    }
]

export const Registration: React.FC = () => {
    const setBackground = useContext(AppContext)
    setBackground(MaxPackage)
    return <>
        <NacccHelmet title='Registration' description='Register for the 2020 North American Cycle Courier Championship! Registration is open now through Labor Day 2020. Sign up now for the lowest fees.'/>
        <header><h2>Register!</h2></header>
        <main className='registration'>
            <Form
                name='registration'
                onSubmit={ data => {
                    console.log(JSON.stringify(data))
                    fetch('http://localhost:8080/registrations/', {
                        method: 'POST',
                        mode: 'cors',
                        headers: { 'Content-Type': 'application/json' },
                        body: JSON.stringify(data)
                    }).then(response => console.log(response))
                } }
                header='Register for NACCC 2020!'
                description='Step right up, folks. Early birds get the CHEAP reg worm!! Sign up now, as reg fee will be increasing to $$$ soon.'
                fieldsets={ registrationFields }
            />
        </main>
    </>
}
