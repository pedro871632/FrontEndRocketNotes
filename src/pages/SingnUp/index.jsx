import {Container,Form,Background} from "./styles";
import {Input} from "../../components/Input/index"
import {FiMail,FiLock,FiUser} from "react-icons/fi"
import {Button}  from "../../components/button"
export function SingnUp(){
    return (
            
        <Container>

                        <Background/>

            <Form>
                <h1>RocketNotes</h1>  
                <p>Aplicacao para salvar e gerenciar seus links</p>      
                
                <h2>Crie sua conta</h2>

                <Input placeholder="Nome"
                    type="text"
                    icon={FiUser}
                />

                
                <Input placeholder="Email"
                    type="text"
                    icon={FiMail}
                />

                <Input placeholder="senha"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Criar conta"/>

                <a href="#">Cadastrar</a>
            </Form>

        </Container>

    );
}
