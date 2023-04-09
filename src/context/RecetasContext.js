import { createContext, useState } from "react"

export const RecetasContext = createContext()

const RecetasProvider = (props) => {

    const [ recetas, guardarRecetas ] = useState([])
    const [ busqueda, buscarRecetas ] = useState({
        ingrediente: '',
        categorias: ''
        })


    return (
        <RecetasContext.Provider
            value={{
                buscarRecetas
            }}
        >
            {props.children}
        </RecetasContext.Provider>
    );
}
 
export default RecetasProvider;