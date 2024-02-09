import { signInWithPopup } from "firebase/auth"

type SignInProps = {
    auth: any,
    provider: any
}
const SignInButton:React.FC<SignInProps> = ({auth, provider}) => {
    const signInWithGoodle = () => {
        signInWithPopup(auth, provider)
    }
    return (
        <button onClick={signInWithGoodle}>
            <p>Googleでサインイン</p>
        </button>
    )
}

export default SignInButton