import {Container,Links,Content} from "./style.js"; 
import { Tag } from "../../components/tag/index.jsx";
import {Button} from "../../components/button";
import {Header} from "../../components/Header/index.jsx";
import {Section} from "../../components/Section";
import {ButtonText} from "../../components/ButtonText";
export  function Details(){
  return (
    <Container>
      

      <Header/>


      <main>
        <Content>



        


          <ButtonText title="Excluir Nota"/>


          <Section title="Links Uteis">
            <Links>
                <li>
                  <a href="#">google.com</a>
                </li>

                <li>
                  <a href="#">facebook.com</a>
                </li>

            </Links>   
          </Section>

          <Section title="Marcadores">
            <Tag title="express"/>
            <Tag title="Node"/>
            <Tag title="Javascript"/>
          </Section>

          <Button title="Voltar"/>

        </Content>


      </main>

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