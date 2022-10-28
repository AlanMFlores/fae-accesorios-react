import { createContext, useState } from "react";

export const CartContext = createContext();

const CartProvider = (props) => {
    const [cart, setCart] = useState([]);

    const addToCart = (item, quantity) => {
        const producto = {...item, quantity};
        isInCart(producto.id)
        ? addProducts(producto)
        : setCart([...cart, producto])
    }

    const isInCart = (id) => {
        return cart.some(prod => prod.id === id)
    }

    const addProducts = (product) => {
        const cartUpdated = cart.map(productInCart => {
            if(product.id === productInCart.id) {
                const productUpdated = {
                    ...productInCart,
                    quantity: product.quantity,
                }
                return productUpdated;
            } else {
                return productInCart;
            }
        });
        setCart(cartUpdated);
    }

    const deleteAll = () => {
        setCart([])
    }

    const totalProducts = () => {
        const copyProducts = [...cart];
        let count = 0;
        copyProducts.forEach(product => {
            count = count + product.quantity;
        })
        return count;
    }

    const totalPrice = () => {
        const copyPrices = [...cart];
        let count = 0;
        copyPrices.forEach(product => {
            count = count + product.quantity * product.price;
        })
        return count;
    }

    const deleteOne = (id) => {
        const filteredProducts = cart.filter(product => product.id !== id);
        setCart(filteredProducts)
    }

    return(
        <CartContext.Provider
            value={{
                cart,
                addToCart,
                deleteAll,
                totalProducts,
                totalPrice,
                deleteOne
            }}
        >
            {props.children}
        </CartContext.Provider>
    )
}

export default CartProvider;