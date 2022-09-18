import logo from '../fae-logo.png'
import CartWidget from './CartWidget';

function NavBar() {
    return (
        <header className="header">
            <figure className="header-logo">
                <img src={logo} alt='header-logo' className='header-logo'/>
            </figure>
            <nav className='nav'>
                <div className='nav--list'>
                    <ul className='nav--list-menu'>
                        <li class="nav--list-item">
                            <a href="/">Home</a>
                        </li>
                        <li class="nav--list-item">
                            <a href="/">Catálogo</a>
                        </li>
                        <li class="nav--list-item">
                            <a href="/">Contacto</a>
                        </li>
                        <li class="nav--list-item">
                            <a href="/">Favoritos</a>
                        </li>
                        <li class="nav--list-item">
                            <button class="show-register">Registrarse/Iniciar Sesión</button>
                        </li>
                        <li class="nav--list-item">
                            <CartWidget></CartWidget>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    )
}

export default NavBar;