import { SessionProvider } from 'next-auth/react';
import { auth } from '@/auth';

import { AuthButton } from './AuthButton.client';

export const AuthButtonServer = async() => {
    const session = await auth()

    if ( session && session.user) {
        session.user = {
            name: session.user.name,
            email: session.user.email
        }
    }

    return (
        <SessionProvider refetchInterval={2} session={session}>
            <AuthButton />
        </SessionProvider>
    )
}