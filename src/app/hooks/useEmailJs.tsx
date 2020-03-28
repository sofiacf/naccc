import emailjs from 'emailjs-com'
import { useState } from 'react'

export const useEmail = (template: string): { onSubmit: () => Promise<void>; sent: boolean } => {
    const [sent, setSent] = useState<boolean>(false)
    const [sending, setSending] = useState<boolean>(false)

    const onSubmit = async (): Promise<void> => {
        if (sending) return
        setSending(true)
        const userId = 'user_DKDaF6S47jnNpm1TBq3Bt'
        const status = await emailjs.sendForm('naccc', template, `form#${ template }`, userId)
        if (status.status === 200) {
            setSent(true)
            setSending(false)
        }
    }
    return { sent, onSubmit }
}
