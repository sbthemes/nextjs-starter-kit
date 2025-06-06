'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/hooks/useAuth'
import { HOME_PAGE, LOGIN_PAGE } from '@/lib/redirect'
import { IForgotPassword } from '@/types/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function Page() {
    const router = useRouter()
    const { forgotPassword } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<IForgotPassword>({
        defaultValues: {
            email: '',
        },
    })

    const handleForm: SubmitHandler<IForgotPassword> = async (data) => {
        try {
            await forgotPassword(data)
        } catch {}
    }

    return (
        <div className="container">
            <div className="bg-darkblue min-h-screen">
                <div className="py-6 text-center">
                    <Link href={HOME_PAGE}>Home</Link>
                </div>
                <div className="flex min-h-[calc(100vh-77px)] items-center justify-center p-4">
                    <div className="mx-auto w-full max-w-[600px] space-y-[25px] rounded-sm bg-white p-[25px]">
                        <h1 className="text-center text-[22px] font-semibold leading-7">
                            Forgot password
                        </h1>

                        <form
                            className="space-y-4"
                            onSubmit={handleSubmit(handleForm)}
                        >
                            <div>
                                <label className="form-label">
                                    Email address
                                </label>
                                <div>
                                    <Input
                                        {...register('email')}
                                        type="text"
                                        placeholder="Email address..."
                                    />
                                </div>
                            </div>

                            <div>
                                <Link
                                    href="/forgot-password"
                                    className="text-darkblue hover:text-primary underline transition-all duration-300"
                                >
                                    Forgot Password
                                </Link>
                            </div>
                            <div className="text-center">
                                <Button disabled={isSubmitting} type="submit">
                                    Forgot Password
                                </Button>
                            </div>
                        </form>

                        <p className="text-lightblack text-center">
                            <Link
                                href={LOGIN_PAGE}
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
