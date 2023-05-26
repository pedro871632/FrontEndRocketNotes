import { FiArrowLeft,FiUser,FiMail,FiLock,FiCamera} from "react-icons/fi";
import {Container,Form,Avatar} from "./styles";

import {Input} from "../../components/Input";
import {Button} from "../../components/button"; 


export function Profile(){
    return (
        <Container>
            <header>
                <a href="/">
                    <FiArrowLeft/>
                </a>

            </header>

            
            <Form>
                <Avatar>
                    <img src="https://github.com/pedro871632.png" alt="Foto usuario"/>
                    <label htmlFor="avatar">

                        <FiCamera/>
                        <input id="avatar" type="file"/>
                    </label>
                </Avatar>

                <Input placeholder="Nome" icon={FiUser}  type="text"/>

                <Input placeholder="Email" type="text" icon={FiMail}/>

                <Input placeholder="Senha" icon={FiLock} type="text"/>

                <Button title="Cadastrar"/>
            </Form>

        </Container>
    )
}