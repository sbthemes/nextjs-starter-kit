import { useAuth } from '@/hooks/useAuth'
import { unstable_noStore } from 'next/cache'
import { redirect } from 'next/navigation'

export default function AuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    unstable_noStore()
    const { loggedIn } = useAuth()
    if (!loggedIn) {
        redirect('/login')
    }

    return <div>{children}</div>
}
