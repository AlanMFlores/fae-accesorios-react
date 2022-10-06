import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import getProducts from "../data/getProducts";
import ItemDetails from "./ItemDetails";

function ItemDetailsContainer() {

    const { id } = useParams()

    const [item, setItems] = useState([])

    useEffect(() => {
        getProducts().then(response => {
            console.log(response);
            setItems(response.find(product => product.id === id))
        })
    }, [id])
    

    return(
        <div className="products-details-container">
            {<ItemDetails key={item.id} item={item}/>}
        </div>
    )
}

export default ItemDetailsContainer;