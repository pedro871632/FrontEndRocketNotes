import { RiShutDownLine } from "react-icons/ri"
import { Profile,Container,Logout } from "./styles";
export function Header(){

    return(
        <Container>
            <Profile>
                <img src="https://github.com/pedro871632.png" alt="Foto do usuario"/>

                <div>

                    <span>Bem vindo</span>
                    <strong>Pedro !</strong>
                </div>

            </Profile>

            <Logout>
                <RiShutDownLine/>
            </Logout>
        </Container>
    )

s
}