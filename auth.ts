import NextAuth from "next-auth"
import Google from "next-auth/providers/google" 
import type { Provider } from "next-auth/providers"

export const { handlers, signIn, signOut, auth } = NextAuth({
  providers: [
    Google({
        authorization: {
            params: {
                prompt: "consent",
                access_type: "offline",
            }}
    })
],
    callbacks: {
        async jwt({token, account, user} : {token: any, account: any, user:any}) {
            if(user) {
                token.id = user.id
                console.log(token.id)
            } 
            return token
        },
        async session({session, token} : {session: any, token: any}) {
            session.user.id = token.id
            return session
        }
    }
    
})