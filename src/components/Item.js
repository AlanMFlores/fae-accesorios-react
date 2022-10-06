import { Link } from "react-router-dom";

function Item( {item} ) {
    return(
        <Link to={`/item/${item.id}`}>
            <div className='product-card'>
                <div className="product-card-image">
                    <img src={item.image} alt="product card"/>
                </div>
                <div className="product-card-description">
                    <div className="product-card-info">
                        <p className="product-card-name">{item.name}</p>
                        <p className="product-card-price">${item.price}</p>
                    </div>
                </div>
                <div className="product-card-purchase">
                    <button className="cart-btn">Agregar al Carrito</button>
                    <button className="purchase-btn">Comprar</button>
                </div>
            </div>
        </Link>
    )
}

export default Item;