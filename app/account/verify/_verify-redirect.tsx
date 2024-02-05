'use client'

import { useAuth } from '@/hooks/useAuth'
import { useRouter } from 'next/navigation'
import { useEffect } from 'react'

export default function VerifyRedirect() {
    const { loggedIn, isEmailVerified } = useAuth()
    const router = useRouter()

    useEffect(() => {
        if (!loggedIn) {
            router.push('/login')
        } else if (loggedIn && isEmailVerified) {
            router.push('/')
        }
    })

    return <></>
}
