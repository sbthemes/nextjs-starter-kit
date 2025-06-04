'use client'

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { useAuth } from '@/hooks/useAuth'
import { HOME_PAGE, LOGIN_PAGE } from '@/lib/redirect'
import { IRegister } from '@/types/auth'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { SubmitHandler, useForm } from 'react-hook-form'

export default function Page() {
    const router = useRouter()
    const { register: signup } = useAuth()

    const {
        register,
        handleSubmit,
        formState: { isSubmitting },
    } = useForm<IRegister>({
        defaultValues: {
            email: '',
            password: '',
            password_confirmation: '',
        },
    })

    const handleForm: SubmitHandler<IRegister> = async (data) => {
        try {
            await signup(data)
            router.refresh()
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
                            Sign up
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
                                <label className="form-label">Password</label>
                                <div>
                                    <Input
                                        {...register('password')}
                                        type="password"
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
                                        placeholder="Password..."
                                    />
                                </div>
                            </div>

                            <div className="text-center">
                                <Button disabled={isSubmitting} type="submit">
                                    Register
                                </Button>
                            </div>
                        </form>

                        <p className="text-lightblack text-center">
                            Already registered?{' '}
                            <Link
                                href={LOGIN_PAGE}
                                className="text-darkblue hover:text-primary underline transition-all duration-300"
                            >
                                Sign in
                            </Link>
                            .
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
