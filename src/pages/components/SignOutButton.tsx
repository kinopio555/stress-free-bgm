import { auth } from "../../firebase"

const SignOutButton = () => {
    return (
        <button onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </button>
    )
}

export default SignOutButton