import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.js'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

//Inferencia en TS
//Cuando creamos un elemento sin indicar su tipo, TS intenta inferir en el tipo de dato del que se 
//trata y si llega a la conclusión de que podría ser null dará error

//!: operador assertion not null, evita que los elementos se interpreten como null


//Primitive Types en TS:
// De forma nativa, TS reconoce number, string, boolean, null y undefined
