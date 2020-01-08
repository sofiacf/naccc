import emailjs from 'emailjs-com'
import React, { createRef, useContext, useState } from 'react'
import Helmet from 'react-helmet'
import '../Contact.css'
import cityHall from '../images/city_hall.png'
import { AppContext } from './App'

interface FieldProps {
    name: string;
    id: string;
    type?: string;
    label?: string;
    optional?: boolean;
    autoComplete?: string;
}

const Field: React.FC<FieldProps> = props => {
    const { name, id, label, type, optional, autoComplete } = props
    return <>
        <label htmlFor={ id }>{ label || name }{ optional ? '' : '*' }</label>
        <input
            type={ type || 'text' }
            id={ id }
            name={ id }
            placeholder={ `Your ${ name.toLowerCase() }...` }
            required={ !optional }
            autoComplete={ autoComplete || '' }
        />
    </>
}

export function Contact(): JSX.Element {
    const form = createRef<HTMLFormElement>()
    const [sent, setSent] = useState<boolean>(false)
    const [sending, setSending] = useState<boolean>(false)

    const onSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()
        if (sent || sending || form.current && form.current.reportValidity()) return
        setSending(true)
        const formData = form.current as HTMLFormElement
        const template = 'contact'
        const userId = 'user_DKDaF6S47jnNpm1TBq3Bt'
        const status = await emailjs.sendForm('naccc', template, formData, userId)
        if (status.status === 200) {
            setSent(true)
            setSending(false)
        }
    }
    const setBackgroundSrc = useContext(AppContext)
    setBackgroundSrc(cityHall)
    return <>
        <Helmet>
            <title>NACCC | Contact</title>
            <meta name='description' content='Get in touch with the 2020 NACCC planning committee by filling out the form below.'/>
        </Helmet>
        <header><h2>Get in touch</h2></header>
        <main>
            { !sent && <>
                <h3>Questions? Other stuff? Drop us a line!</h3>
                <br/>
                <form className='contact-form' ref={ form } onSubmit={ onSubmit }>
                    <fieldset>
                        <Field name='Name' id='from_name' autoComplete='name'/>
                        <Field name='Business' label='Business' id='business' optional/>
                        <Field name='Email' type='email' id='reply_to' autoComplete='email'/>
                        <label htmlFor='message'>Message*</label>
                        <textarea name='message_html' id='message_html' required placeholder='Your message...'/>
                        <button id='submit'><label htmlFor='submit'>Send</label></button>
                    </fieldset>
                </form>
            </> }
            { sent && <h3>Thanks! We look forward to chatting with you</h3> }
        </main>
    </>
}
