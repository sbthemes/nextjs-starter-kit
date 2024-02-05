'use client'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function NoAuthRedirect() {
    const { loggedIn, isEmailVerified } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (loggedIn) {
            if (!isEmailVerified) {
                router.push('/account/verify')
            } else {
                router.push('/')
            }
        }
    })

    return <></>
}
