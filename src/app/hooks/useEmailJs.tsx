import emailjs from 'emailjs-com'
import { useState } from 'react'

export const useEmail = (template: string) => {
    const [sent, setSent] = useState<boolean>(false)
    const [sending, setSending] = useState<boolean>(false)

    const onSubmit = async (): Promise<void> => {
        if (sending) return
        setSending(true)
        const userId = 'user_DKDaF6S47jnNpm1TBq3Bt'
        const status = await emailjs.sendForm('naccc', template, 'form', userId)
        if (status.status === 200) {
            setSent(true)
            setSending(false)
        }
    }
    return { sent, onSubmit }
}
