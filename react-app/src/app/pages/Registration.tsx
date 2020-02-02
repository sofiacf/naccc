import React, { useContext, useState } from 'react'
import { AppContext } from '../App'
import { FieldsetProps, Form } from '../components/Form'
import { NacccHelmet } from '../components/NacccHelmet'
import MaxPackage from '../images/max-package.png'

const registrationFields: FieldsetProps[] = [
    {
        legend: 'Personal Info',
        fields: [
            { label: 'First name' },
            { label: 'Last name' },
            { label: 'Birthdate', type: 'date', min: '01/01/1920', max: '12/31/2002' }
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
                id: 'is working messenger',
                type: 'select',
                options: ['Yes', 'Recovered', 'No']
            },
            { label: 'City' },
            { label: 'Team/company ', id: 'team', optional: true },
            { label: 'Callsign', optional: true }
        ]
    }, {
        legend: 'Racing Info',
        fields: [
            { label: 'Gender', type: 'select', options: ['female', 'male', 'nonbinary', 'nah'], optional: true },
            { label: 'WTNB racer?', id: 'wtnb', type: 'checkbox', optional: true },
            { label: 'Pronouns', optional: true },
            { label: 'Racer number', type: 'number', min: 0, max: 9999, optional: true }
        ]
    }, {
        legend: 'Other Stuff',
        fields: [
            { label: 'Emergency contact name' },
            { label: 'Emergency contact phone', type: 'tel' },
            {
                label: 'Need housing?', id: 'needs housing', type: 'select', options: ['yes, just for me', 'yes, for' +
                ' me and a pal', 'yes,' +
                ' for me and all my bffs', 'no']
            },
            { label: 'Shirt size', type: 'select', options: ['XS', 'S', 'M', 'L', 'XL', 'XXL'] }
        ]
    }
]

export const Registration: React.FC = () => {
    const setBackground = useContext(AppContext)
    setBackground(MaxPackage)
    const [submitted, setSubmitted] = useState(false)
    const onSubmit = (data: any): void => {
        fetch('/registrations/', {
            method: 'POST',
            mode: 'cors',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(data)
        }).then(() => setSubmitted(true))
    }
    return <>
        <NacccHelmet title='Registration' description='Register for the 2020 North American Cycle Courier Championship! Registration is open now through Labor Day 2020. Sign up now for the lowest fees.'/>
        <header><h2>Register!</h2></header>
        <main className='registration'>
            { !submitted && <Form
                name='registration'
                onSubmit={ onSubmit }
                header='Register for NACCC 2020!'
                description='Step right up, folks. Early birds get the CHEAP reg worm!! Sign up now, as reg fee will be increasing to $40 soon.'
                fieldsets={ registrationFields }
                submitText='continue'
            /> }
            { submitted &&
            <form className='form' action='https://www.paypal.com/cgi-bin/webscr' method='post' target='_top'>
                <h3>What you get:</h3>
                <ul>
                    <li>You can race!</li>
                    <li>A racer number (as requested, if you act fast!)</li>
                    <li>A bag of fun sponsor stuff!</li>
                    <li>A shirt (at registration)!</li>
                    <li>To pay now!</li>
                    <li><b>It&lsquo;ll be $25.</b></li>
                </ul>
                <fieldset>
                    <input type='hidden' name='cmd' value='_s-xclick'/>
                    <input type='hidden' name='hosted_button_id' value='EHDUC2P3MS96E'/>
                    <input type='image' src='https://www.paypalobjects.com/en_US/i/btn/btn_buynowCC_LG.gif' name='submit' alt='PayPal - The safer, easier way to pay online!'/>
                    <img alt='' className='paypal-button' src='https://www.paypalobjects.com/en_US/i/scr/pixel.gif' width='1' height='1'/>
                </fieldset>
            </form> }
        </main>
    </>
}
