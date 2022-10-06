import { Products } from '../data/Products';

function getProducts() {
    return new Promise(resolve => {
        setTimeout( () => {
            resolve(Products)
        }, 500)
})
}

export default getProducts;