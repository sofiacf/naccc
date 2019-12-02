import emailjs from 'emailjs-com'
import React, { createRef, useState } from 'react'
import '../Contact.css'
import hancock from '../images/hancock.png'
import { Background } from './Background'

interface FieldProps {
    name: string;
    id: string;
    type?: string;
    label?: string;
    optional?: boolean;
}

function Field(props: FieldProps): JSX.Element {
    const { name, id, label, type, optional } = props
    return <>
        <label htmlFor={ id }>{ label || name }</label>
        <input
            type={ type || 'text' }
            id={ id }
            name={ id }
            placeholder={ `Your ${ name.toLowerCase() }...` }
            required={ !optional }
        />
    </>
}

export function Contact(): JSX.Element {
    const form = createRef<HTMLFormElement>()
    const [sent, setSent] = useState<boolean>(false)
    const [sending, setSending] = useState<boolean>(false)
    const onSubmit = async (event: React.FormEvent): Promise<void> => {
        event.preventDefault()
        if (sent || sending) return
        setSending(true)
        const formData = form.current as HTMLFormElement
        const status = await emailjs.sendForm('naccc', 'contact', formData, 'user_DKDaF6S47jnNpm1TBq3Bt')
        setSent(status.status === 200)
        setSending(false)
    }

    return <>
        <Background src={ hancock }/>
        <header>
            <h2>Get in touch</h2>
        </header>
        <main>
            { !sent && <>
                <h3>Questions? Other stuff? Drop us a line!</h3>
                <br/>
                <form className='contact-form' ref={ form } onSubmit={ onSubmit }>
                    <fieldset>
                        <Field name='Name' id='from_name'/>
                        <Field name='Email' type='email' id='reply_to'/>
                        <Field name='Business' label='Business (optional)' id='business' optional/>
                        <label htmlFor='message'>Message</label>
                        <textarea name='message_html' id='message_html' required placeholder='Your message...'/>
                        <button id='submit'><label htmlFor='submit'>Send</label></button>
                    </fieldset>
                </form>
            </> }
            { sent && <h3>{ 'Thanks! We look forward to chatting with you' }</h3> }
        </main>
    </>
}
