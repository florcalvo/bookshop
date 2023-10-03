import Navbar from '../componentes/navbar/Navbar';
import NonExistentRoute from '../componentes/nonexistentroute/NonExistentRoute';
import image from '../assets/pngwing.com.png'
import { Link } from "react-router-dom";

const RutaInexistente = () => {
    return (
        <div>
            <Navbar></Navbar>
            <NonExistentRoute></NonExistentRoute>
            <img src={image} className='imagen-error'></img>
            <Link to="/" className='botones-paginacion'>
            <button>Ir a la página principal</button>
            </Link>
        </div>
    )
}

export default RutaInexistente