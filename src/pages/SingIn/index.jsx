import {Container,Form,Background} from "./styles";
import {Input} from "../../components/Input/index"
import {FiMail,FiLock} from "react-icons/fi"
import {Button}  from "../../components/button"
export function SingIn(){
    return (

        <Container>
            <Form>
                <h1>RocketNotes</h1>  
                <p>Aplicacao para salvar e gerenciar seus links</p>      
                
                <h2>Faca seu login</h2>

                <Input placeholder="Email"
                    type="text"
                    icon={FiMail}
                />


                <Input placeholder="Email"
                    type="password"
                    icon={FiLock}
                />

                <Button title="Entrar"/>

                <a href="#">Criar Conta</a>
            </Form>

            <Background/>
        </Container>

    );
}
