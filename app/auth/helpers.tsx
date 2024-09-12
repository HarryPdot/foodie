'use server'

import {signIn as logIn, signOut as logOut} from '@/auth'

export async function signIn() {
    await logIn('Google')
}

export async function signOut() {
    await logOut()
}