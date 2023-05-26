import { Children } from "react";
import {Container} from "./styles";

export function Tag({title,...rest}){
    return (
        <Container {...rest}>
            {title}
        </Container>




    );

}