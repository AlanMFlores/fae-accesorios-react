import logo from '../fae-logo.png'
import CartWidget from './CartWidget';
import { Link } from 'react-router-dom';

function NavBar() {
    return (
        <header className="header">
            <figure className="header-logo">
                <Link to={'/'}>
                    <img src={logo} alt='header-logo' className='header-logo'/>
                </Link>
            </figure>
            <nav className='nav'>
                <div className='nav--list'>
                    <ul className='nav--list-menu'>
                        <li class="nav--list-item">
                            <Link to={"/"}>Home</Link>
                        </li>
                        <li class="nav--list-item">
                            <Link to={`/category/${'aros'}`}>Aros</Link>
                        </li>
                        <li class="nav--list-item">
                            <Link to={`/category/${'arcilla'}`}>Aros de Arcilla</Link>
                        </li>
                        <li class="nav--list-item">
                            <Link to={`/category/${'collares'}`}>Collares</Link>
                        </li>
                        <li class="nav--list-item">
                            <Link to={`/category/${'pulseras'}`}>Pulseras</Link>
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