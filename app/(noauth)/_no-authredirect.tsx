'use client'

import { useAuth } from '@/hooks/useAuth'
import { EMAIL_VERIFY_PAGE, HOME_PAGE } from '@/lib/redirect'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NoAuthRedirect() {
    const { loggedIn, isEmailVerified } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (loggedIn) {
            if (!isEmailVerified) {
                router.push(EMAIL_VERIFY_PAGE)
            } else {
                router.push(HOME_PAGE)
            }
        }
    })

    return <></>
}
