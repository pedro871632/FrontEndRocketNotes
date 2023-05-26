import React from 'react'
import ReactDOM from 'react-dom/client';


import theme from "./styles/theme.js"
import { ThemeProvider } from 'styled-components';
import GlobalStyles from "./styles/global"

import {New} from './pages/New';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>

    <ThemeProvider theme={theme}>
        <GlobalStyles/>
        <New/>  
    </ThemeProvider>
      
  </React.StrictMode>
)

{/* theme provider e utilizado para fornecer um objeto com as cores que serao utilizadas no projeto, isto ajuda a manter consistencia 
  no projeto. */}

  {/* Global style contem todos os estilos que serao aplicados a todos os componentes que nao serao estilizados especificamente. */}