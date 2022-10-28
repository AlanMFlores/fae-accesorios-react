import { getDoc, collection, doc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { db } from "../../firebaseConfig";
import ItemDetails from "../ItemDetails/ItemDetails";
import Loading from "../Loading/Loading";

function ItemDetailsContainer() {

    const { id } = useParams()

    const [item, setItem] = useState([])

    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true)

        const itemsCollection = collection(db, "items");
        const ref = doc(itemsCollection, id);

        getDoc(ref).then(res => {
            setItem({
                id: res.id,
                ...res.data()
            })
            setLoading(false)
        })
    }, [id])
    

    return(
        <div className="products-details-container">
            {
                loading ?
                <Loading/>
                : (
                    <ItemDetails key={item.id} item={item}/>
                )
            }

        </div>
    )
}

export default ItemDetailsContainer;