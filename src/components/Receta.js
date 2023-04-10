import { useContext, useState } from "react";
import { ModalContext } from "../context/ModalContext";

import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };


const Receta = ({receta}) => {

    // Configuracion del modal de material-ui
    const [ open, setOpen] = useState(false)

    const handleOpen = () => setOpen(true)
    const handleClose = () => setOpen(false)

    // extraer los valores del context
    const { informacion, guardarIdReceta, guardarReceta} = useContext(ModalContext);

    return ( 
        <div className="col-md-4 mb-3">
            <div className="card">
                <h2 className="card-header">{receta.strDrink}</h2>

                <img className="card-img-top" src={receta.strDrinkThumb} alt={`Imagen de ${receta.strDrink}`}/>

                <div className="card-body">
                    <button
                        type="button"
                        className="btn btn-block btn-primary"
                        onClick={() => {
                            guardarIdReceta(receta.idDrink)
                            handleOpen()
                        }}
                    >Ver Receta</button>
                        <Modal
                            open={open}
                            onClose={() => {
                                guardarIdReceta(null)
                                guardarReceta({})
                                handleClose()
                            }}
                            aria-labelledby="modal-modal-title"
                            aria-describedby="modal-modal-description"
                        >
                            <Box sx={style}>
                            <Typography id="modal-modal-title" variant="h6" component="h2">
                                {informacion.strDrink}
                            </Typography>
                            <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                                <h3 className="mt-4">Instrucciones</h3>
            
                                {informacion.strInstructions}

                                <img className="img-fluid mt-4" src={informacion.strDrinkThumb} />
                                
                            </Typography>
                            </Box>
                        </Modal>
                </div>
            </div>
        </div>
     );
}
 
export default Receta;