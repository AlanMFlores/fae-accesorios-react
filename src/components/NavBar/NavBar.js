import logo from '../../fae-logo.png'
import CartWidget from '../CartWidget/CartWidget';
import { Link, NavLink } from 'react-router-dom';
import { useState } from 'react';
import hambMenu  from '../../hamb-menu.png';
import closeMenu from '../../close.png';

function NavBar() {
    const [isActive, setIsActive] = useState(false);

    const showMenuBtn = () => {
        setIsActive(true)
    }

    const closeMenuBtn = () => {
        setIsActive(false)
    }

    return (
        <header className="header">
            <figure className="header-logo">
                <Link to={'/'}>
                    <img src={logo} alt='header-logo' className='header-logo'/>
                </Link>
            </figure>
            <nav className='nav'>
                <div className='nav--list'>
                    <ul className={isActive ? `nav--list-menu show-menu` : 'nav--list-menu'}>
                        <li class="nav--list-item">
                            <NavLink to={"/"} onClick={closeMenuBtn}>Home</NavLink>
                        </li>
                        <li class="nav--list-item">
                            <NavLink  to={`/category/${'aros'}`} onClick={closeMenuBtn} className={({isActive}) => isActive ? 'active-link' : ''}>Aros</NavLink>
                        </li>
                        <li class="nav--list-item">
                            <NavLink  to={`/category/${'arcilla'}`} onClick={closeMenuBtn} className={({isActive}) => isActive ? 'active-link' : ''}>Aros de Arcilla</NavLink>
                        </li>
                        <li class="nav--list-item">
                            <NavLink  to={`/category/${'collares'}`} onClick={closeMenuBtn} className={({isActive}) => isActive ? 'active-link' : ''}>Collares</NavLink>
                        </li>
                        <li class="nav--list-item">
                            <NavLink  to={`/category/${'pulseras'}`} onClick={closeMenuBtn} className={({isActive}) => isActive ? 'active-link' : ''}>Pulseras</NavLink>
                        </li>
                        <li class="nav--list-item" onClick={closeMenuBtn}>
                            <CartWidget></CartWidget>
                        </li>
                        <img src={closeMenu} onClick={closeMenuBtn} className='close-menu' alt="boton menu mobile"/>
                    </ul>
                </div>
            </nav>
            <button class="hamb-menu-btn" onClick={showMenuBtn}>
                <img src={hambMenu} alt="boton menu mobile"/>
            </button>
        </header>
    )
}

export default NavBar;