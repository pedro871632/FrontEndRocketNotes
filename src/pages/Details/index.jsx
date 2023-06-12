import {Container,Links,Content} from "./style.js"; 
import { Tag } from "../../components/tag/index.jsx";
import {Button} from "../../components/button";
import {Header} from "../../components/Header/index.jsx";
import {Section} from "../../components/Section";
import {ButtonText} from "../../components/ButtonText";


import { useParams,useNavigate } from "react-router-dom";
import { useEffect,useState } from "react";
import { api } from "../../services/api.js";

export  function Details(){
  const [data,setData] = useState(null);
  const params = useParams();
  const navigate = useNavigate(); 
  
 function BackHome(){
  navigate(-1);
 } 

 async function handleRemove(){
  const confirm = window.confirm("Deseja excluir a nota? ")
  if(confirm){
    await api.delete(`notes/${data.id}`)

    navigate("/")
  }
 }
 
  useEffect(()=> {
    async function fetchNote(){
      const response = await api.get(`/notes/${params.id}`)
      setData(response.data)

      console.log(response.data)
    }

    fetchNote()
  });


  return (
    <Container>
      

      <Header/>

    { data &&
      <main>
        <Content>
          <ButtonText title="Excluir Nota" onClick={handleRemove}/>


          <h1>{data.title}</h1>
        
          <p>{data.description}</p>



        { data.links &&
          <Section title="Links Uteis">
            <Links>
               {data.links.map(link => (<li key={String(link.id)}><a  target="__blank" href={link.url}>
                {link.url}
               </a> </li>))}
            </Links>   
          </Section>
        }

        { data.tags &&
          <Section title="Marcadores">
              {data.tags.map((tag) => <Tag title={tag.name} key={String(tag.id)}/>)}
          </Section>
        }
          <Button title="Voltar" onClick={BackHome}/>

        </Content>


      </main>
    }
    </Container>
    
  );
}


// para passar elementos JSX em um componente que esta dentro de outro componente e preciso que o componente tenha como parametro a palavra chave
// children

// cada componente/interface tera seu arquivo css.
// Styled components e a escrita de css dentro de um arquivo js. voce aproveita todos os recursos que o js oferece para trabalhar com componentizacoes.
// Styled components utiliza a estrategia de pre processadores, ou seja depois ele vai gerar um arquivo css para ser utilizado.



// se eu quiser adicionar elementos JSX dentro de um componente que eu que criei eu devo utilizar o "children"

// se o componente for criado pela biblioteca Styled Components eu consigo adicionar elementos JSX numa boa. 