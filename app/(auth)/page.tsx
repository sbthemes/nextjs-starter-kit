import { useStore } from '@/store'
import Link from 'next/link'

export default async function Home() {
    return (
        <div className="container">
            <div className="text-center">
                <Link href="/login">Login</Link>
            </div>
            <div>Home page</div>
        </div>
    )
}
