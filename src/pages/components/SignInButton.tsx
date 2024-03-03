import { signInWithPopup } from "firebase/auth"

type SignInProps = {
    auth: any,
    provider: any
}
export default function SignInButton({auth, provider}:SignInProps) {
    const signInWithGoodle = () => {
        signInWithPopup(auth, provider)
    }
    return (
        <button onClick={signInWithGoodle}>
            <p>Googleでサインイン</p>
        </button>
    )
}

