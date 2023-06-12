import { useState } from "react";

import {Container,Form,Background} from "./styles";
import {Input} from "../../components/Input/index"
import {FiMail,FiLock,FiUser} from "react-icons/fi"
import {Button}  from "../../components/button"
import { Link, useNavigate } from "react-router-dom";
import {api} from "../../services/api";

export function SingnUp(){

    const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [password,setPassword] = useState("");  

    const navigate = useNavigate();
    function handleSignup(){
        if(!name||!email||!password){
            return alert("Preencha todos os campos.")
        }

        api.post("/user",{name,email,password}).then(()=>{
            alert("Usuario Cadastrado!");
            navigate("/");
        }    
        )
        .catch(error => {
            if(error.response){
                alert("deuruim")
                alert(error.response.data.message)
            } 
            else {
                alert("Não foi possível cadastrar.")
            }
        })

    }


    
    return (
        <Container>

                        <Background/>

            <Form>
                <h1>Notes</h1>  
                <p>Aplicacao para salvar e gerenciar seus links</p>      
                
                <h2>Crie sua conta</h2>

                <Input placeholder="Nome"
                    type="text"
                    icon={FiUser}
                    onChange={e => setName(e.target.value)}
                />

                
                <Input placeholder="Email"
                    type="text"
                    icon={FiMail}
                    onChange={e => setEmail(e.target.value)}
                />

                <Input placeholder="senha"
                    type="password"
                    icon={FiLock}
                    onChange={ev => setPassword(ev.target.value)}
                />

                <Button title="Criar conta" onClick={handleSignup}/>

                <Link to="/">Cadastrar</Link>
            </Form>

        </Container>

    );
}
