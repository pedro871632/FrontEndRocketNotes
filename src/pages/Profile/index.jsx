import { useState } from "react";
import { FiArrowLeft,FiUser,FiMail,FiLock,FiCamera} from "react-icons/fi";
import {Container,Form,Avatar} from "./styles";
import { useAuth } from "../../hooks/auth";
import {Input} from "../../components/Input";
import {Button} from "../../components/button"; 
import { Link } from "react-router-dom";
import { api } from "../../services/api";
import avatarPlaceHolder from "../../assets/useruser.svg"
export function Profile(){
    const {user,updateProfile} = useAuth();
    const [name,setName] = useState(user.name);
    const [email,setEmail] = useState(user.email);
    const [oldpassword,setPasswordOld] = useState();
    const [password,setPassword] = useState();
    const avatarURL = user.avatar?`${api.defaults.baseURL}/files/${user.avatar}`:avatarPlaceHolder;

    const [avatar,setAvatar] = useState(avatarURL);
    const [avatarFile,setAvatarFile] = useState(null);


    async function atualizarPerfil(){
       
        const updated = {name,email,password,oldpassword,avatar:user.avatar}


        console.log(avatarFile)

        await updateProfile({user:updated,avatarFile})
    
    }

    async function handleChangeAvatar(ev){
        const file = ev.target.files[0];
        setAvatarFile(file);

        const imagePreview = URL.createObjectURL(file);
        setAvatar(imagePreview);
    }

    return (
        <Container>
            <header>
                <Link to="/">
                    <FiArrowLeft/>
                </Link>

            </header>

            
            <Form>
                <Avatar>
                    <img src={avatar} alt="Foto usuario"/>
                    <label htmlFor="avatar">

                        <FiCamera/>
                        <input id="avatar" type="file" onChange={handleChangeAvatar}/>
                    </label>
                </Avatar>
                <Input placeholder="Nome" icon={FiUser}  type="text" value={name} onChange={(e)=> setName(e.target.value)}/>

                <Input placeholder="Email" type="text" icon={FiMail} value={email} onChange={(e)=> setEmail(e.target.value)}/>

                <Input placeholder="Senha antiga" icon={FiLock} type="text" onChange={ev => setPasswordOld(ev.target.value)}/>

                <Input placeholder="Senha nova" icon={FiLock} type="text" onChange={ev => setPassword(ev.target.value)}/>

                <Button title="Alterar" onClick={atualizarPerfil}/>
            </Form>

        </Container>
    )
}