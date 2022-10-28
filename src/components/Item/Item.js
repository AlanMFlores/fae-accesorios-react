import { Link } from "react-router-dom";
import stars from '../../stars.png'

function Item( {item} ) {

    return(
            <div className='product-card'>
                <div className="product-card-image">
                    <img src={item.image} alt="product card"/>
                </div>
                <div className="product-card-description">
                    <div className="product-card-info">
                        <p className="product-card-name">{item.name}</p>
                        <img src={stars} alt='stars'/>
                        <p className="product-card-price">${`${item.price}.00`}</p>
                    </div>
                </div>
                <div className="product-card-purchase">
                    <Link className="see-details-btn" to={`/item/${item.id}`}>Ver más detalles</Link>
                </div>
            </div>
        
    )
}

export default Item;