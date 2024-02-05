import NoAuthRedirect from '@/app/(noauth)/_no-authredirect'
import { useAuth } from '@/hooks/useAuth'
import { redirect } from 'next/navigation'

export default function NoAuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    const { loggedIn } = useAuth()
    if (loggedIn) {
        redirect('/')
    }

    return (
        <div>
            <NoAuthRedirect />
            {children}
        </div>
    )
}
