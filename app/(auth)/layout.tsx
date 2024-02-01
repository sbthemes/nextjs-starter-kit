import { useAuth } from '@/hooks/useAuth'
import { unstable_noStore as noStore } from 'next/cache'
import { redirect } from 'next/navigation'

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    noStore()

    const { loggedIn, isEmailVerified } = useAuth()
    if (!loggedIn) {
        redirect('/login')
    }

    if (!isEmailVerified) {
        redirect('/account/verify')
    }

    return <div>{children}</div>
}
