import React, { useContext } from 'react'
import { AppContext } from '../App'
import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { NacccHelmet } from '../components/NacccHelmet'
import { useEmail } from '../hooks/useEmailJs'
import cityHall from '../images/city_hall.png'
import './style/Contact.css'

export function Contact(): JSX.Element {
    const { sent, onSubmit } = useEmail('contact')
    const setBackgroundSrc = useContext(AppContext)
    setBackgroundSrc(cityHall)
    return <>
        <NacccHelmet title='Contact' description='Get in touch with the 2020 NACCC planning committee by filling out the form below.'/>
        <Header>Get in touch</Header>
        <main>
            { !sent && <Form
                name='contact'
                onSubmit={ onSubmit }
                header='Questions? Other stuff?'
                description="Drop us a line! We'll see your message and get back to you directly."
                fieldsets={ [{
                    legend: '',
                    fields: [
                        { label: 'Name', id: 'from_name', width: 'full' },
                        { label: 'Business', id: 'business', optional: true, width: 'full' },
                        { label: 'Email', id: 'reply_to', type: 'email', width: 'full' },
                        { label: 'Message', id: 'message_html', type: 'textarea', width: 'full' }
                    ]
                }] }/> }
            { sent && <h3>Thanks! We look forward to chatting with you</h3> }
        </main>
    </>
}
