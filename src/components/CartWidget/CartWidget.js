import cartIcon from '../../cart-icon.png';
import { Link } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../../context/CartContext';

function CartWidget() {
    const {totalProducts } = useContext(CartContext)
    return(
        <Link to={'/cart'} className="cart-widget-btn">
            {totalProducts() === 0 ?
            (
                <>
                    <img src={cartIcon} className='cart-btn--icon' alt='cart icon'></img>
                </>
            ) : (
                <>
                    <img src={cartIcon} className='cart-btn--icon' alt='cart icon'></img>
                    <p className='products-in-cart'>{totalProducts()}</p>
                </>
            )
            
            }
            
        </Link>
    )
}

export default CartWidget;