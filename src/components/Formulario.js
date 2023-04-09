import { useContext, useState } from 'react'
import { CategoriasContext } from '../context/CategoriasContext'
import { RecetasContext } from '../context/RecetasContext'

const Formulario = () => {

    const [ busqueda, guardarBusqueda ] = useState({
        ingrediente: '',
        categoria: ''
    })
    
    const { categorias } = useContext(CategoriasContext)
    const { buscarRecetas } = useContext(RecetasContext)

    // funcion para leer los contendos
    const obtenerDatosReceta = e => {
        guardarBusqueda({
            ...busqueda,
            [e.target.name] : e.target.value
        })
    }

    return ( 
        <form
            className="col-12"
            onSubmit={e => {
                e.preventDefault()
                buscarRecetas(busqueda)
            }}
        >
            <fieldset className="text-center">
                <legend>Busca bebidas por Categoría o Ingredientes</legend>
            </fieldset>

            <div className="row mt-4">
                <div className="col-md-4">
                    <input 
                        name="ingrediente"
                        className="form-control"
                        type="text"
                        placeholder="Buscar por Ingrediente"
                        onChange={obtenerDatosReceta}
                    />
                </div>
                <div className="col-md-4">
                    <select 
                        className="form-control"
                        name="categoria"
                        onChange={obtenerDatosReceta}
                    >
                        <option value="">-- Selecciona Categoría --</option>
                        {categorias.map(categoria => (
                            <option 
                                value={categoria.strCategory}
                                key={categoria.strCategory}
                            >{categoria.strCategory}</option>
                        ))}
                    </select>
                </div>
                <div className="col-md-4">
                    <input 
                        type="submit" 
                        className="btn btn-block btn-primary"
                        value="Buscar Bebidas"
                    />
                </div>
            </div>

        </form>
    );
}
 
export default Formulario;