
import { signIn } from "@/auth"
const Login = () => {
    return (
        <form
            action={async () => {
                "use server"
                await signIn("Google")
            }}
        >
            <button type="submit">Sign in</button>
        </form>
    )
}

export { Login }