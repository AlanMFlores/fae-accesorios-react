import { Link } from 'react-router-dom'

function Error() {
    return(
        <div className="error-404">
            <h1>¡No se ha encontrado la página solicitada!</h1>
            <Link to='/' className='back-to-home'>Volver al Inicio</Link>
        </div>
    )
}

export default Error;