'use client'

import { useAuth } from '@/hooks/useAuth'
import { EMAIL_VERIFY_PAGE, LOGIN_PAGE } from '@/lib/redirect'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function AuthRedirect() {
    const { loggedIn, isEmailVerified } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loggedIn) {
            router.push(LOGIN_PAGE)
        } else if (loggedIn && !isEmailVerified) {
            router.push(EMAIL_VERIFY_PAGE)
        }
    })

    return <></>
}
