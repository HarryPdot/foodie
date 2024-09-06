
import { signIn, signOut, auth } from "@/auth"
import { User } from "../User/User"

const Login = async() => {
    const session = await auth()

    return (
        <div>
            {!session?.user ? 
                        <form
                        action={async () => {
                        "use server"
                        await signIn("Google")
                        }}
                        >
                            <button type="submit">Sign in</button>
                        </form> 
                        :
                        <form
                        action={async () => {
                        "use server"
                        await signOut()
                        }}
                        >
                            <button type="submit">Sign out</button>
                        </form>
                    }

        </div>

    )
}

export { Login }