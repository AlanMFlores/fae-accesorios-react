function ItemDetails( {item} ) {
    return(
        <div className="product-details">
            <div className="product-details-image">
                <img src={item.image} alt='product'/>
            </div>
            <div className="product-details-description">
                <div className="product-details-info">
                    <h2 className="product-name">{item.name}</h2>
                    <h3 className="product-price">${item.price}</h3>
                    <h3 className="product-stock">Stock: <span>{item.stock}</span></h3>
                    <h4 className="product-description">Descripción:</h4>
                    <p className="product-description-info">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Sit id at maiores laboriosam ducimus beatae distinctio libero assumenda est</p>
                    <hr/>
                </div>
                <div className="product-details-btns">
                    <button className="purchase-btn">Comprar</button>
                    <button className="cart-btn">Agregar al Carrito</button>
                </div>
            </div>
        </div>
    )
}

export default ItemDetails;