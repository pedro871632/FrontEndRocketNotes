import { createGlobalStyle } from "styled-components";


export default createGlobalStyle`

    * {
        margin:0;
        padding:0;
        box-sizing: border-box;
    }


    body {

        background-color:${({ theme }) => theme.COLORS.BACKGROUND_800} ;
        color: ${({theme}) => theme.COLORS.WHITE }; 
        -webkit-font-smoothing: antialiased;
    
    }

    body,input,button,textarea {
        font-family: 'Roboto Slab', serif;
        font-size: 16px;
        outline: none;

    }

    ${'' /* essa funcao poderia ser usada da seguinte forma: ${(props)=> props.theme.COLORS.WHITE} 
        POREM DENTRO DO OBJETO PROPS, EXISTE O THEME(QUE E OQUE ME INTERESSA.
            SENDO ASSIM EU USO A TECNICA DE DESESTRUTURACAO PARA PEGAR SOMENTE O OBJETO THEME QUE ESTA DENTRO DE PROPS.)
    */}

    a {
        text-decoration: none;

    }

    button,a {
        cursor:pointer;
        transition: filter 0.2s;
    }

    button:hover,a:hover {
        filter: brightness(0.9);
    }   
`;