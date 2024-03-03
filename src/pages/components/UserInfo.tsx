import auth from "../../../firebase"
import styled from "styled-components"
import Image from "next/image";

type UserInfoProps = {
    auth: any
}
export default function UserInfo({auth}:UserInfoProps){
    const UserInfoStyled = styled.div`
    position: absolute;
    top: 10px;
    right: 50px;
    `
    return (
        <UserInfoStyled>
// 例: 条件レンダリングを使用
{auth.currentUser && <img src={auth.currentUser.photoURL} alt="ユーザ情報" />}        </UserInfoStyled>
    )
}

