import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { CartContext } from "../../context/CartContext";
import ItemCount from "../ItemCount/ItemCount";

function ItemDetails( {item} ) {

    const [isInCart, setIsInCart] = useState(false);
    const { addToCart } = useContext(CartContext);

    const onAdd = cantidad => {
        addToCart(item, cantidad);
        setIsInCart(true);
    }

    return(
        <div className="product-details">
            <div className="product-details-image">
                <img src={item.image} alt='product'/>
            </div>
            <div className="product-details-description">
                <div className="product-details-info">
                    <h2 className="product-name">{item.name}</h2>
                    <h3 className="product-price">${`${item.price}.00`}</h3>
                    <h3 className="product-stock">Stock: <span>{item.stock}</span></h3>
                    <h3 className="product-description">Descripción:</h3>
                    <p className="product-description-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit id at maiores laboriosam ducimus beatae distinctio libero assumenda est</p>
                </div>
                {
                    isInCart ? (
                    <Link to={'/cart'} className="finish-purchase">Finalizar Compra</Link>
                    )
                    : (
                    <ItemCount stock={item.stock} initial={1} onAdd={onAdd}/>
                    )
                }
                <div className="product-details-payment">
                    <Link className="payment-method-title">Ver Métodos de Pago</Link>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails;