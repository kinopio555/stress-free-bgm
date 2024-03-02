import { auth } from "../firebase"
import styled from "styled-components"
import Image from "next/image";

type UserInfoProps = {
    auth: any
}
const UserInfo:React.FC<UserInfoProps> = ({auth}) => {
    const UserInfoStyled = styled.div`
    position: absolute;
    top: 10px;
    right: 50px;
    `
    return (
        <UserInfoStyled>
            <img src={auth.currentUser.photoURL} alt="ユーザ情報"  />
        </UserInfoStyled>
    )
}

export default UserInfo