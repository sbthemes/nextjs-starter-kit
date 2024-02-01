import { useAuth } from '@/hooks/useAuth'
import { unstable_noStore as noStore } from 'next/cache'
import { redirect } from 'next/navigation'

export default function NoAuthLayout({
    children,
}: Readonly<{
    children: React.ReactNode
}>) {
    noStore()

    const { loggedIn } = useAuth()
    if (loggedIn) {
        redirect('/')
    }

    return <div>{children}</div>
}
