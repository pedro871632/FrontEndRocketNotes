import {useState} from "react";
import {Container,Form} from "./styles";
import {Header} from "../../components/Header";
import {ButtonText} from "../../components/ButtonText";
import {Input} from "../../components/Input"
import { TextArea } from "../../components/TextArea";
import {NoteItem} from "../../components/NotemItem";
import {Section} from "../../components/Section";
import { Button } from "../../components/button";
import { Link, redirect, useNavigate } from "react-router-dom";
import { api } from "../../services/api";
export function New(){
    
    const [title,setTitle] = useState("");
    const [description,setDescription] = useState("");
    
    
    const [links,setLinks] = useState([])
    const [newLink,setNewLink] = useState("")
    
    const [tags,setTags] = useState([])
    const [newTag,setNewTag] = useState("")

    const navigate = useNavigate();

    
    function handleAddLink(){
        setLinks(ant => [...ant,newLink])
        setNewLink("")
    }

    function handleRemoveLink(deleted){
        setLinks(prev => prev.filter((el)=> el!==deleted))
    }

    function handleAddTag(){
        setTags((prev)=> [...prev,newTag])
        setNewTag("")
    }

    function handleRemoveTag(element){
        setTags(tags => tags.filter(
            tag => tag!= element
        ));

    }

    async function handleRegisterNote(){
        if (!title){
            return alert("Digite o titulo da nota.")
        }
        if (newTag){
            return alert("Existe uma tag no campo de adicionar.")    
        }
        if (newLink) {
            return alert("Existe um Link no campo de adicionar.")

        }


        await api.post("/notes",{title,description,tags,links})
        alert("Nota criada com sucesso! ")
        navigate(-1)
    }

    return (
        <Container>
        <Header/>

        <main>
            <Form>
                <header>
                    <h1>Criar Nota</h1>
                    <Link to="/">Voltar</Link>
                    <ButtonText title="Voltar"/>
                </header>
                <Input placeholder="Titulo" onChange={ev => setTitle(ev.target.value)}/>
                <TextArea placeholder="Observacoes" onChange={ev => setDescription(ev.target.value)}/>

                <Section title="Links Uteis">
                    {links.map((elem,index)=>{
                        return(
                            <NoteItem
                                value={elem}
                                key={String(index)}
                                onClick={() => handleRemoveLink(elem)}
                            />
                        )
                    })}
                    <NoteItem isNew
                        placeholder="novo link"
                        value={newLink}
                        onChange={ev => setNewLink(ev.target.value)}
                        onClick={handleAddLink}
                    />
                </Section>


                <Section title="Marcadores">
                    <div className="tags">
                        
                       {tags.map((tag,index) => <NoteItem
                            value={tag}
                            key={index}
                            onClick={() => handleRemoveTag(tag)}
                       />)} 
                        <NoteItem isNew
                            value={newTag}
                            onChange={ev => setNewTag(ev.target.value)}
                            onClick={handleAddTag}

                        />
                        
                    </div>
                </Section>
                <Button title="Salvar" onClick={handleRegisterNote}/>

            </Form>


        </main>
        

        </Container>
    );
}

