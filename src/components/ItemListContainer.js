import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import getProducts from '../data/getProducts';
import ItemList from './ItemList';

function ItemListContainer(props) {

    const [items, setItems] = useState([]);

    const {category} = useParams()

    useEffect(()=> {
        if(!category) {
            getProducts().then(
                response => setItems(response)
            )
        } else {
            getProducts().then(
                response => setItems(response.filter(product => product.category === category))
            )
        }
    }, [category])

    return(
        <>
            <h1 className='products-title'>Bienvenidos a FAE Accesorios</h1>
            <ItemList items={items}/>
        </>
    )
}

export default ItemListContainer