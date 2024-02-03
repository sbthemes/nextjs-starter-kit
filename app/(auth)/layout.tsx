import { useAuth } from '@/hooks/useAuth'
import { redirect } from 'next/navigation'

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const { loggedIn, isEmailVerified } = useAuth()
    if (!loggedIn) {
        redirect('/login')
    }

    if (!isEmailVerified) {
        redirect('/account/verify')
    }

    return <div>{children}</div>
}
