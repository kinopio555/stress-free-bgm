import auth from "../firebase"
import styled from "styled-components"

const SignOutButton = () => {
    const SignOutButtonStyled = styled.button`
    background-color: skyblue;
    position: absolute;
    top: 120px;
    right: 50px;
    `
    return (
        <SignOutButtonStyled onClick={() => auth.signOut()}>
            <p>サインアウト</p>
        </SignOutButtonStyled>
    )
}

export default SignOutButton