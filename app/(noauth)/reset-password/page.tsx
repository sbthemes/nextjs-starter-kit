'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/hooks/useAuth'
import { IResetPassword } from '@/types/auth'
import Link from 'next/link'
import { useRouter, useSearchParams } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function Page() {
    const router = useRouter()
    const query = useSearchParams()
    const { user, resetPassword, logout } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<IResetPassword>({
        defaultValues: {
            password: '',
            password_confirmation: '',
        },
    })

    const handleForm: SubmitHandler<IResetPassword> = async (data) => {
        try {
            await resetPassword(query?.get('token') as string, data)
            router.push('/login')
        } catch {}
    }

    return (
        <div className="container">
            <div className="bg-darkblue min-h-screen">
                <div className="py-6 text-center">
                    <Link href="/">Home</Link>
                </div>
                <div className="flex min-h-[calc(100vh-77px)] items-center justify-center p-4">
                    <div className="mx-auto w-full max-w-[600px] space-y-[25px] rounded bg-white p-[25px]">
                        <h1 className="text-center text-[22px] font-semibold leading-7">
                            Reset password
                        </h1>

                        <form
                            className="space-y-4"
                            onSubmit={handleSubmit(handleForm)}
                        >
                            <div>
                                <label className="form-label">Password</label>
                                <div>
                                    <Input
                                        {...register('password')}
                                        type="text"
                                        placeholder="Password..."
                                    />
                                </div>
                            </div>

                            <div>
                                <label className="form-label">
                                    Confirm password
                                </label>
                                <div>
                                    <Input
                                        {...register('password_confirmation')}
                                        type="password"
                                        placeholder="Confirm password..."
                                    />
                                </div>
                            </div>

                            <div className="text-center">
                                <Button disabled={isSubmitting} type="submit">
                                    Reset Password
                                </Button>
                            </div>
                        </form>

                        <p className="text-lightblack text-center">
                            <Link
                                href="/login"
                                className="text-darkblue hover:text-primary underline transition-all duration-300"
                            >
                                Sign in
                            </Link>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}