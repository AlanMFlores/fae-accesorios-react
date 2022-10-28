import { useState } from "react";

function ItemCount({stock, initial, onAdd}) {
    const [count, setCount] = useState(0);

    const sumar = () => {
        count < stock && setCount(count + 1)
    };

    const restar = () => {
        count > initial && setCount(count - 1);
    }

    const agregar = () => {
        onAdd(count);

    }

    return(
        <div className="container-counter">
            <div className="container-btn">
                
                <button className="btn-counter" onClick={restar}>
                    -
                </button>
                <p className="counter-num">{count}</p>
                <button className="btn-counter" onClick={sumar}>
                    +
                </button>
            </div>

            <button 
                disabled={count === 0}
                className="btn-add"
                onClick={agregar}
            >
                Agregar al Carrito
            </button>
        </div>
    )
}

export default ItemCount;

