import {useState,useEffect} from "react";

import {FiPlus,FiSearch} from "react-icons/fi";
import {Container,Brand,Menu,Search,Content,NewNote} from "./styles";

import { useNavigate } from "react-router-dom";

import {Header} from "../../components/Header";
import { ButtonText } from "../../components/ButtonText";
import { Input } from "../../components/Input";

import {Section} from "../../components/Section";
import {Note} from "../../components/Note";
import { api } from "../../services/api";
export function Home(){
    const [tags,setTags] = useState("");
    const [tagSelected,setTagSelected] = useState([]);
    const [search,setsearch] = useState("");
    const [notes,setNotes] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{
        async function fetchTags(){
            console.log("sdasdas")
            const response = await api.get("/tags");
            
            setTags(response.data);
        }
        fetchTags();
        
    } ,[]);

    useEffect(()=>{
        async function fetchNotes(){
            const response = await api.get(`/notes?title=${search}&tags=${tagSelected}`);
            setNotes(response.data)
        }

        fetchNotes();
    },[tagSelected,search])



    function tagSelectedVerify(tagName){

        if(tagSelected.includes(tagName)){
            setTagSelected(tagSelected.filter( elem => elem!=tagName));
        }

        else {
            setTagSelected([...tagSelected,tagName])
        }

    }

    function handleDetails(id){
        navigate(`/details/${id}`);
    }



    function resetSelecteds(){
        setTagSelected([]);
    }


    return(


       <Container>
            <Brand>
                <h1>Notes</h1>
            </Brand>
            <Header/>
            <Menu>
                <li><ButtonText title="Todos" isactive={tagSelected.length === 0 } onClick={resetSelecteds}/></li>
                { tags && tags.map(
                    (tag) => {    
                        return(  
                            <li key={String(tag.id)}>
                                <ButtonText  title={tag.name} onClick={() => tagSelectedVerify(tag.name)}  isactive={tagSelected.includes(tag.name)}/>
                            </li>)
                    }
                )}
                
            </Menu>

            <Search>
                <Input 
                    placeholder="Pesquisar pelo titulo" 
                    icon={FiSearch}
                    onChange={(ev)=> setsearch(ev.target.value)}
                />
            </Search>

            <Content>
                <Section title="Minhas Notas">
                    {
                        notes.map((note => <Note key={note.id}  data={{title:note.title,tags:note.tags}} onClick={()=>handleDetails(note.id)}/>))
                    }                                                         
                    <Note data={{title:"react",tags:[{id:"1",name:"reactdsad" },{id:"2",name:"node"}]}}/>
                </Section>
           </Content>


            <NewNote to="/new">
                <FiPlus/>

                Criar Nota

            </NewNote>
       </Container> 
    )
}