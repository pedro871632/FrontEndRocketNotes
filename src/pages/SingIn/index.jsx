import { useState } from "react";

import {Container,Form,Background} from "./styles";
import {Input} from "../../components/Input/index"
import {FiMail,FiLock} from "react-icons/fi"
import {Button}  from "../../components/button"
import { Link } from "react-router-dom";

import {useAuth} from "../../hooks/auth";



export function SingIn(){
    
    const [email,setEmail] = useState("")
    const [password,setPassword] = useState("")

    const {signIn} = useAuth();
    
    function handleSignIn(){
       signIn({email,password});
    }
    
    return (

        <Container>
            <Form>
                <h1>Notes</h1>  
                <p>Aplicacao para salvar e gerenciar seus links</p>      
                
                <h2>Faca seu login</h2>

                <Input placeholder="Email"
                    type="text"
                    icon={FiMail}
                    onChange={ev => setEmail(ev.target.value)}
                />


                <Input placeholder="Senha"
                    type="password"
                    icon={FiLock}
                    onChange={(ev)=>setPassword(ev.target.value)}
                />

                <Button title="Entrar" onClick={handleSignIn}/>

                <Link to="/register">Criar Conta</Link>
            </Form>

            <Background/>
        </Container>

    );
}
