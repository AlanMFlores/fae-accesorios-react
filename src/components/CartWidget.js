import cartIcon from '../cart-icon.png';

function CartWidget() {
    return(
        <button className="cart-btn">
            <img src={cartIcon} className='cart-btn--icon' alt='cart icon'></img>
        </button>
    )
}

export default CartWidget;