import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import deleteIcon from '../../delete-icon.svg';

function Cart() {
    const { cart, deleteOne, deleteAll, totalPrice } = useContext(CartContext);

    return(
        <div className='cart-container'>
            <h1>Tu carrito</h1>
            {
                cart.length === 0 ? 
                (
                    <div className='empty-cart-message'>
                        <p>¡No hay productos en tu carrito!</p>
                        <Link to={"/"}>Vuelve al inicio para agregar algún producto</Link>
                    </div>
                ) : (
                    cart.map(product => (
                        <div className='cart-products'>
                            <div className='cart-products-item'>
                                <div className='cart-products-item--image'>
                                    <img src={product.image} alt="Descripción"/>
                                </div>
                                <div className='cart-products-item--name'>
                                    <p>{product.name}</p>
                                </div>
                                <div className='cart-products-item--price'>
                                    <p>${`${product.price}.00`}</p>
                                </div>
                                <div className='cart-products-item--quantity'>
                                    <p>{product.quantity} (Unidades)</p>
                                </div>
                                <div className='cart-products-item--subtotal'>
                                    <p>${`${product.price * product.quantity}.00`}</p>
                                </div>
                                <button className='delete-product' onClick={()=>{deleteOne(product.id)}}>
                                    <img src={deleteIcon} alt='delete icon'/>
                                </button>
                            </div>
                        </div>
                    ))
                )
            }

            {
                cart.length > 0 && 

                <div className='cart-products-checkout'>
                    <div className='cart-products-clear'>
                        <button className='clear-cart' onClick={()=>{deleteAll()}}>
                            Vaciar Carrito <img src={deleteIcon} alt='delete icon'/>
                        </button>
                    </div>
                    <div className='cart-checkout'>
                        <p>Total a Pagar: ${`${totalPrice()}.00`}</p>
                        <Link to={'/checkout'} className='cart-checkout-link'>
                            <button className='checkout-btn'>Finalizar Compra</button>
                        </Link>
                    </div>
                </div>
            }

        </div>
    )
}

export default Cart;