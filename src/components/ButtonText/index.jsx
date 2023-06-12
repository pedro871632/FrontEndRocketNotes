import {Container} from "./styles";

export function ButtonText({title,isactive = false,...rest}){
    return (
        <Container type="Button"
                    isactive={isactive}
        {...rest}
        
        >
            {title}
        </Container>
    );
}