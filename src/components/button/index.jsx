import {Container} from "./styles";

export function Button({title,...rest}){
    return (

        <Container type="button"
            {...rest}
        >
            <a>{title}</a>
        </Container>

    );


} 

// // export function Button(props){
//     return (

//         <Container type="button">
//             {props.title}
//         </Container>

//     );


//outra forma de pegar uma propiedade. } 