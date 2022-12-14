import Item from '../Item/Item';

function ItemList( {items} ) {
    console.log(items);
    return(
        <>
            <div className='products-container'>
                {items.map( item => <Item key={item.id} item={item}/>)}
            </div>
        </>
    )
}

export default ItemList