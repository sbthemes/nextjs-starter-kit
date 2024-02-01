'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Home() {
    const { loggedIn, logout } = useAuth()
    const router = useRouter()

    return (
        <div className="container">
            <div className="text-center">
                <Link href="/login">Login</Link>
            </div>

            {loggedIn && (
                <div className="mt-10 text-center">
                    <Button
                        type="button"
                        onClick={() => {
                            logout()
                            router.refresh()
                        }}
                    >
                        Logout
                    </Button>
                </div>
            )}

            <div className="mt-10 text-center">Dashboard here</div>
        </div>
    )
}
