'use server'

import { cookies } from 'next/headers'
import { redirect } from 'next/navigation'

export async function loginAction(formData: FormData) {
    const username = formData.get('username')
    const password = formData.get('password')

    if (!username || !password) {
        throw new Error('Invalid credentials')
    }

    const cookie = await cookies()

    cookie.set('token', 'demo-token', {
        httpOnly: true,
        path: '/',
    })

    cookie.set('role', 'user', {
        httpOnly: true,
        path: '/',
    })

    redirect('/posts')
}
