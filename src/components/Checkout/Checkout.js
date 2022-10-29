import React from 'react';
import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../../context/CartContext';
import { db } from '../../firebaseConfig';

function Checkout() {
    const [name, setName] = useState('');
    const [telephone, setTelephone] = useState('');
    const [email, setEmail] = useState('');
    const [emailConfirm, setEmailConfirm] = useState('');
    const [orderId, setOrderId] = useState('')

    const { totalPrice, cart, deleteAll} = useContext(CartContext)
    const total = totalPrice();

    const handleId = orderNum => setOrderId(orderNum);

    const handleName = e => setName(e.target.value)

    const handleTelephone = e => setTelephone(e.target.value)

    const handleEmail = e => setEmail(e.target.value)

    const handleEmailConfirm = e => setEmailConfirm(e.target.value)

    const handleSubmit = e => {
        e.preventDefault();

        const order = {
            buyer: {name, telephone, email},
            date: serverTimestamp(),
            cart,
            total
        }

        const orderCollection = collection(db, 'orders');
        addDoc(orderCollection, order).then(data => {
            handleId(data.id)
        })
    }
    

    if(orderId) {
        deleteAll();
        return(
            <div className='success-message'>
                <h1>Muchas Gracias por tu compra!</h1>
                <h2>Te dejamos el número de seguimiento:</h2>
                <p>{" "} {orderId}</p>
                <Link to={'/'} className='back-to-home'>Volver al Inicio</Link>
            </div>
        )
    }

    return(
        <div className="checkout-container">
            <h1 className='checkout-container--title'>Checkout</h1>
            <div className='checkout-grid'>
                <form onSubmit={handleSubmit} className='form-container'>
                    <h2 className='form-container--title'>Ingresá tus datos para completar la compra:</h2>
                    <label for="name">Nombre Completo</label>
                    <input
                        id="name" 
                        type="text"
                        name="nombre"
                        placeholder="Nombre Completo"
                        value={name}
                        onChange={handleName}
                    />
                    <label for="telephone">Teléfono</label>
                    <input
                        id="telephone" 
                        type="number"
                        name="telephone"
                        placeholder="Teléfono"
                        value={telephone}
                        onChange={handleTelephone}
                    />
                    <label for="email">Email</label>
                    <input
                        id="email" 
                        type="email"
                        name="email"
                        placeholder="Correo Electrónico"
                        value={email}
                        onChange={handleEmail}
                    />
                    <label for="email-confirm">Confirmar Email</label>
                    <input
                        id="email-confirm" 
                        type="email"
                        name="email-confirm"
                        placeholder="Correo Electrónico"
                        value={emailConfirm == email ? email : 'Email Inválido'}
                        onChange={handleEmailConfirm}
                    />
                    <button className='form-btn'>Enviar</button>
                </form>
                <div className='brief-container'>
                    <h3 className='brief-container-title'>Detalle</h3>
                    <div className='brief-container-quantity'>
                        <p>Cantidad de items:</p>
                        <p>{cart.length}</p>
                    </div>
                    <div className='brief-container-shipping'>
                        <p>Costo de Envío:</p>
                        <p>Envío Gratis!</p> 
                    </div>
                    <div className='brief-container-total'>
                        <p>Total:</p>
                        <p>${`${total}.00`}</p>
                    </div>
                    <Link to={'/cart'} className='back-to-cart'>🡨 Volver al Carrito</Link>
                </div>
            </div>
        </div>
    )
}

export default Checkout