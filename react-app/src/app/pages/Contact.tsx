import emailjs from 'emailjs-com'
import React, { useContext, useState } from 'react'
import { AppContext } from '../App'
import { Form } from '../components/Form'
import { Header } from '../components/Header'
import { NacccHelmet } from '../components/NacccHelmet'
import cityHall from '../images/city_hall.png'
import './style/Contact.css'

export function Contact(): JSX.Element {
    const [sent, setSent] = useState<boolean>(false)
    const [sending, setSending] = useState<boolean>(false)

    const onSubmit = async () => {
        if (sending) return
        setSending(true)
        const template = 'contact'
        const userId = 'user_DKDaF6S47jnNpm1TBq3Bt'
        const status = await emailjs.sendForm('naccc', template, 'form', userId)
        if (status.status === 200) {
            setSent(true)
            setSending(false)
        }
    }
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
                        { label: 'Name', id: 'from_name' },
                        { label: 'Business', id: 'business', optional: true },
                        { label: 'Email', id: 'reply_to', type: 'email' },
                        { label: 'Message', id: 'message_html', type: 'textarea' }
                    ]
                }] }/> }
            { sent && <h3>Thanks! We look forward to chatting with you</h3> }
        </main>
    </>
}
