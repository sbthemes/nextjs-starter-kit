import AuthRedirect from '@/app/(auth)/_auth-redirect'
import { useAuth } from '@/hooks/useAuth'
import { EMAIL_VERIFY_PAGE, LOGIN_PAGE } from '@/lib/redirect'
import { redirect } from 'next/navigation'

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const { loggedIn, isEmailVerified } = useAuth()
    if (!loggedIn) {
        redirect(LOGIN_PAGE)
    }

    if (!isEmailVerified) {
        redirect(EMAIL_VERIFY_PAGE)
    }

    return (
        <div>
            <AuthRedirect />
            {children}
        </div>
    )
}
