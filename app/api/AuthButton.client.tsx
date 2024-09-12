'use client'

import { useSession } from 'next-auth/react'
import { signIn, signOut } from '../auth/helpers'

const AuthButton = () => {
    const session = useSession()

    return session?.data?.user ? (
        <div>
            Signed in as {session.data.user.name}
            <br />
            <button onClick={() => signOut()}>Sign out</button>
        </div>
        
    ) : (
        <button onClick={() => signIn()}>Sign in</button>
    )
}

export { AuthButton }