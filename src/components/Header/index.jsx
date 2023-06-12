import { RiShutDownLine } from "react-icons/ri"
import { Profile,Container,Logout } from "./styles";
import { useContext } from "react";
import { useAuth } from "../../hooks/auth";
import avatarPlaceHolder from "../../assets/useruser.svg";
import { api } from "../../services/api";
export function Header(){

    const {signOut,user} = useAuth()
    const avatarURL = user.avatar?`${api.defaults.baseURL}/files/${user.avatar}`:avatarPlaceHolder;

    return(
        <Container>
            <Profile to="/profile">
                <img src={avatarURL} alt="Foto do usuario"/>

                <div>

                    <span>Bem vindo</span>
                    <strong>{user.name}</strong>
                </div>

            </Profile>

            <Logout onClick={signOut}>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )


}