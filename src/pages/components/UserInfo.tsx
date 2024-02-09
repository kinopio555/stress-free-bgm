import { auth } from "../../firebase"

type UserInfoProps = {
    auth: any
}
const UserInfo:React.FC<UserInfoProps> = ({auth}) => {
    return (
        <div>
            <img src={auth.currentUser.photoURL} alt="ユーザ情報" />
        </div>
    )
}

export default UserInfo