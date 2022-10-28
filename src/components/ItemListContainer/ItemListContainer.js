import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { collection, getDocs, query, where } from 'firebase/firestore';
import { db } from '../../firebaseConfig';
import ItemList from '../ItemList/ItemList';
import Loading  from '../Loading/Loading'

function ItemListContainer(props) {

    const [items, setItems] = useState([]);
    const [loading, setLoading] = useState(false);

    const {category} = useParams()

    useEffect(()=> {
        setLoading(true)
        
        const itemsCollection = collection(db, "items");
        const queryItems = category ? query(itemsCollection, where("category", "==", category)) : itemsCollection;

        getDocs(queryItems).then(snapShot => {
            const products = (snapShot.docs.map(item => {
                return {
                    id:item.id, 
                    ...item.data()
                }
            })) 
            setItems(products);
            setLoading(false)
        })

    }, [category])

    return(
        <section className='products-home'>
            {
                loading ? 
                <Loading/>
                : (
                    <>
                        <h1 className='products-home--title'>FAE Accesorios</h1>
                        <ItemList items={items}/>
                    </>
                )
            }
            
        </section>
    )
}

export default ItemListContainer