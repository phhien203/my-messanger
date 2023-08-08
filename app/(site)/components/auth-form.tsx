'use client'

import Input from '@/app/components/inputs/input'
import React from 'react'
import { FieldValues, SubmitHandler, useForm } from 'react-hook-form'

type Variant = 'LOGIN' | 'REGISTER'

export default function AuthForm() {
  const [variant, setVariant] = React.useState<Variant>('LOGIN')
  const [isLoading, setIsLoading] = React.useState(false)

  const toggleVariant = React.useCallback(() => {
    if (variant === 'LOGIN') {
      setVariant('REGISTER')
    } else {
      setVariant('LOGIN')
    }
  }, [variant])

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FieldValues>({
    defaultValues: {
      name: '',
      email: '',
      password: '',
    },
  })

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    setIsLoading(true)

    if (variant === 'REGISTER') {
      // axios register
    }

    if (variant === 'LOGIN') {
      // NextAuth signin
    }
  }

  const socialAction = (action: string) => {
    setIsLoading(true)

    // NextAuth social signin
  }

  return (
    <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
      <div className="sm: rounded-lg bg-white px-4 py-8 shadow sm:px-10">
        <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
          <Input />
        </form>
      </div>
    </div>
  )
}
