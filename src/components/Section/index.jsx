import {Container} from "./styles"

export function Section({title,children}){
    return (
        <Container>
            <h2>{title}</h2>
            {children}
        </Container>
    )
}



// os componentes que voce cria, caso voce queira passar elementos JSX dentro dele e ele esteja dentro de outro componente. 
// voce so consegue passar elementos JSX com auxilio do "children"
// a nao ser que o componente que voce esteja tentando adicionar elementos JSX, seja um componente criado pela biblioteca StyledComponents.
