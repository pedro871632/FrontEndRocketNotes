import {Container,Form} from "./styles";
import {Header} from "../../components/Header";
import {ButtonText} from "../../components/ButtonText";
import {Input} from "../../components/Input"
import { TextArea } from "../../components/TextArea";
import {NoteItem} from "../../components/NotemItem";
import {Section} from "../../components/Section";
import { Button } from "../../components/button";
export function New(){
    return (
        <Container>
        <Header/>

        <main>
            <Form>
                <header>
                    <h1>Criar Nota</h1>
                    <ButtonText title="Voltar"/>
                </header>
                <Input placeholder="Titulo" />
                <TextArea placeholder="Observacoes"/>

                <Section title="Links Uteis">

                    <NoteItem />

                </Section>


                <Section title="Marcadores">
                    <div className="tags">
                        <NoteItem isNew/>
                        <NoteItem />
                        <NoteItem />
                        <NoteItem />
                    </div>
                </Section>
                <Button title="Salvar"/>

            </Form>


        </main>
        

        </Container>
    );
}

