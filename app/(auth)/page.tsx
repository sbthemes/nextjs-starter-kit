'use client'

import { Button } from '@/components/ui/button'
import { useAuth } from '@/hooks/useAuth'
import { LOGIN_PAGE } from '@/lib/redirect'
import Link from 'next/link'
import { useRouter } from 'next/navigation'

export default function Page() {
    const { loggedIn, logout } = useAuth()
    const router = useRouter()

    return (
        <div className="container">
            <div className="text-center">
                <Link href={LOGIN_PAGE}>Login</Link>
            </div>

            {loggedIn && (
                <div className="mt-10 text-center">
                    <Button
                        type="button"
                        onClick={async () => {
                            await logout()
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
